import BoxDetails from '@/components/box_details';
import useStyles from '@/screens/wasmContractDetails/styles';
import { ByteCodeProps } from '@/screens/wasmContractDetails/types';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import useAppTranslation from '@/hooks/useAppTranslation';
import pako from 'pako';
import { FC, startTransition, useEffect, useRef, useState } from 'react';

// Check if the bytecode is gzipped by checking the first two bytes
const isGzipped = (byteCode: string) => /^\\x1f8b/.test(byteCode);

// const strToUint8Array = (str: string) => new Uint8Array(str.split('').map((c) => c.charCodeAt(0)));

const hexToUint8Array = (hex: string) =>
  new Uint8Array(Array.from(hex.match(/[\da-f]{2}/gi) as string[], (h) => parseInt(h, 16)));

function decompressGzip(byteCode: string): Uint8Array {
  const bytes = hexToUint8Array(byteCode);

  if (!isGzipped(byteCode)) return bytes;

  // Decompress the gzipped bytecode
  return pako.inflate(bytes);
}

const steps = ['Decompressing', 'Converting binary to text', 'Done'];

// https://github.com/CosmWasm/wasmd/blob/main/docs/proto/proto-docs.md#cosmwasm.wasm.v1.Model
const ByteCode: FC<ByteCodeProps> = ({ className, byteCode }) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('wasm_contracts');
  const [activeStep, setActiveStep] = useState(0);
  const [displayStep, setDisplayStep] = useState(0);
  const [codeBinary, setCodeBinary] = useState(byteCode);
  const [codeText, setCodeText] = useState(byteCode);
  const firstRun = useRef(true);

  useEffect(() => {
    if (!firstRun.current) return;
    firstRun.current = false;
    const readWasmPromise = import('wabt').then((w) => w.default()).then((w) => w.readWasm);
    startTransition(() => {
      try {
        const decompressed = decompressGzip(byteCode);
        const decompressedCode = new TextDecoder('ascii').decode(decompressed);
        setCodeBinary(decompressedCode);

        (async () => {
          const readWasm = await readWasmPromise;

          startTransition(() => {
            try {
              const mod = readWasm(decompressed, { readDebugNames: true });
              const modText = mod.toText({ foldExprs: false, inlineExport: false });
              mod.generateNames();
              const modCode = modText;
              mod.destroy();
              setCodeText(modCode);
            } catch (error) {
              console.error(error);
            }
            setActiveStep(2);
            setDisplayStep(2);
          });
        })();
        setActiveStep(1);
        setDisplayStep(1);
      } catch (error) {
        console.error(error);
        setActiveStep(steps.length - 1);
        setDisplayStep(steps.length - 1);
      }
    });
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
                    <Step
                      key={label}
                      {...stepProps}
                      sx={{ position: 'relative', cursor: 'pointer' }}
                      onClick={() => setDisplayStep(index)}
                    >
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
              <textarea
                className={classes.codeBlock}
                style={{ display: displayStep === 0 ? 'block' : 'none' }}
                value={byteCode}
              />
              <textarea
                className={classes.codeBlock}
                style={{ display: displayStep === 1 ? 'block' : 'none' }}
                value={codeBinary}
              />
              <textarea
                className={classes.codeBlock}
                style={{ display: displayStep === 2 ? 'block' : 'none' }}
                value={codeText}
              />
            </div>
          ),
          className: classes.codeItem,
        },
      ]}
    />
  );
};

export default ByteCode;
