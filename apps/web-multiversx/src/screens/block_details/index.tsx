import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Consensus from '@/screens/block_details/components/consensus';
import Miniblocks from '@/screens/block_details/components/miniblocks';
import Overview from '@/screens/block_details/components/overview';
import { useBlockDetails } from '@/screens/block_details/hooks';
import useStyles from '@/screens/block_details/styles';

const BlockDetails = () => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('blocks');
  const { state } = useBlockDetails();
  return (
    <>
      <NextSeo
        title={t('blockDetails') ?? undefined}
        openGraph={{
          title: t('blockDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('blockDetails') ?? undefined} className={classes.root}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <Overview {...state.overview} />
          {!!state.miniBlocks?.length && <Miniblocks miniBlocks={state.miniBlocks} />}
          <Consensus className={classes.consensus} consensus={state.consensus} />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default BlockDetails;
