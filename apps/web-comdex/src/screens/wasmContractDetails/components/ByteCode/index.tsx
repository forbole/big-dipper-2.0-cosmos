import BoxDetails from '@/components/box_details';
import useStyles from '@/screens/wasmContractDetails/styles';
import { ByteCodeProps } from '@/screens/wasmContractDetails/types';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/themes/prism.css';
import { FC, startTransition, useEffect, useRef, useState } from 'react';
import loadWasm, { decode } from 'rust-wasm/dist/rust_wasm';

// Check if the bytecode is gzipped by checking the first two bytes
const isGzipped = (byteCode: string) => /^\\x1f8b/.test(byteCode);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Wasmdec {
    class Decompiler {
      constructor(a: boolean, b: boolean, type: 'wasm' | 'wast', inputWasm: unknown);

      decompile(): boolean;

      getDecompiledCode(): string;

      destroy(): void;
    }
  }
}

const strToUint8Array = (str: string) => new Uint8Array(str.split('').map((c) => c.charCodeAt(0)));

// const hexToUint8Array = (hex: string) =>
//   new Uint8Array(Array.from(hex.match(/[\da-f]{2}/gi) as string[], (h) => parseInt(h, 16)));

// function decompressGzip(byteCode: string): Uint8Array {
//   const bytes = hexToUInt8Array(byteCode);

//   if (!isGzipped(byteCode)) return bytes;

//   // Decompress the gzipped bytecode
//   return pako.inflate(bytes);
// }

const steps = ['Decompressing', 'Converting binary to text', 'Decompiling as C', 'Done'];

// https://github.com/CosmWasm/wasmd/blob/main/docs/proto/proto-docs.md#cosmwasm.wasm.v1.Model
const ByteCode: FC<ByteCodeProps> = ({ className, byteCode }) => {
  const { classes } = useStyles();
  const { t } = useTranslation('wasm_contracts');
  const [activeStep, setActiveStep] = useState(0);
  const [code, setCode] = useState(byteCode);
  const firstRun = useRef(true);

  useEffect(() => {
    if (!firstRun.current) return;
    firstRun.current = false;
    // const wasmdecPromise = require('https://rawgit.com/wwwg/wasmdec/master/wasmdec.js/wasmdec.js');
    const wasmPromise = loadWasm();
    const readWasmPromise = import('wabt').then((w) => w.default()).then((w) => w.readWasm);
    (async () => {
      await wasmPromise;

      startTransition(() => {
        try {
          const decompressed = decode(strToUint8Array(byteCode));
          const decompressedCode = Prism.highlight(
            new TextDecoder('ascii').decode(decompressed),
            Prism.languages.clike,
            'clike'
          );
          setCode(decompressedCode);

          (async () => {
            const readWasm = await readWasmPromise;

            startTransition(() => {
              try {
                const mod = readWasm(decompressed, { readDebugNames: true });
                const modText = mod.toText({ foldExprs: false, inlineExport: false });
                mod.generateNames();
                const modCode = Prism.highlight(modText, Prism.languages.clike, 'clike');
                mod.destroy();
                setCode(modCode);

                startTransition(() => {
                  try {
                    const decompiler = new Wasmdec.Decompiler(
                      true,
                      false,
                      'wasm',
                      strToUint8Array(modText)
                    );
                    const success = decompiler.decompile();
                    if (success) {
                      const cCode = decompiler.getDecompiledCode();
                      // decompiler must be manually freed because it's a C++ object allocated on the heap
                      decompiler.destroy();
                      setCode(cCode);
                    }
                  } catch (error) {
                    console.error(error);
                  }
                  setActiveStep(3);
                });
                setActiveStep(2);
              } catch (error) {
                console.error(error);
                setActiveStep(3);
              }
            });
          })();
          setActiveStep(1);
        } catch (error) {
          console.error(error);
          setActiveStep(3);
        }
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!byteCode) return null;
  return (
    <BoxDetails
      className={className}
      title={t('byteCode') ?? undefined}
      details={[
        {
          key: 'compression',
          label: t('compression'),
          detail: <Chip label={isGzipped(byteCode) ? t('gzipped') : t('uncompressed')} />,
        },
        {
          key: '',
          label: '',
          detail: (
            <div>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = { completed: activeStep >= index };
                  return (
                    <Step key={label} {...stepProps} sx={{ position: 'relative' }}>
                      {index === activeStep && index < steps.length - 1 && (
                        <CircularProgress
                          color="secondary"
                          size={30}
                          sx={{
                            position: 'absolute',
                            zIndex: 1,
                            height: '100%',
                            top: -3,
                            left: 5,
                          }}
                        />
                      )}
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <pre className={classes.codeBlock}>
                {
                  // eslint-disable-next-line react/no-danger
                  <code className="language-hex" dangerouslySetInnerHTML={{ __html: code }} />
                }
              </pre>
              <Script src="https://rawgit.com/wwwg/wasmdec/master/wasmdec.js/wasmdec.js" />
            </div>
          ),
          className: classes.codeItem,
        },
      ]}
    />
  );
};

export default dynamic(() => Promise.resolve(ByteCode), { ssr: false });
