import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import { useWasmContractDetails } from '@/screens/wasmContractDetails/hooks';
import useStyles from '@/screens/wasmContractDetails/styles';
import useAppTranslation from '@/hooks/useAppTranslation';
import { NextSeo } from 'next-seo';

const WasmContractDetails = () => {
  const { t } = useAppTranslation('wasm_contracts');
  const { classes } = useStyles();
  const { loading, items } = useWasmContractDetails();

  return (
    <>
      <NextSeo
        title={t('wasmContractDetails') ?? undefined}
        openGraph={{
          title: t('wasmContractDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('wasmContractDetails') ?? undefined}>
        <LoadAndExist loading={loading} exists={loading || !!items[0]}>
          <span className={classes.root}>
            {items[0]?.overview}
            {items[0]?.wasmCode}
            {items[0]?.byteCode}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default WasmContractDetails;
