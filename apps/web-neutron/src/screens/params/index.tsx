import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import BoxDetails from '@/components/box_details';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import { useParams } from '@/screens/params/hooks';
import useStyles from '@/screens/params/styles';
import { formatDistribution, formatMinting, formatCCVConsumer } from '@/screens/params/utils';

const Params = () => {
  const { t } = useAppTranslation('params');
  const { classes } = useStyles();
  const { state } = useParams();
  const minting = state.minting
    ? {
        title: t('minting') ?? undefined,
        details: formatMinting(state.minting, t),
      }
    : null;

  const distribution = state.distribution
    ? {
        title: t('distribution') ?? undefined,
        details: formatDistribution(state.distribution, t),
      }
    : null;

  const ccvConsumer = state.ccvConsumer
    ? {
        title: t('CCVConsumer') ?? undefined,
        details: formatCCVConsumer(state.ccvConsumer, t),
      }
    : null;
  return (
    <>
      <NextSeo
        title={t('params') ?? undefined}
        openGraph={{
          title: t('params') ?? undefined,
        }}
      />
      <Layout navTitle={t('params') ?? undefined}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <span className={classes.root}>
            {minting && <BoxDetails {...minting} />}
            {distribution && <BoxDetails {...distribution} />}
            {ccvConsumer && <BoxDetails {...ccvConsumer} />}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Params;
