import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import List from '@/screens/proposals/components/list';
import { useProposals } from '@/screens/proposals/hooks';
import useStyles from '@/screens/proposals/styles';

const Proposals = () => {
  const { t } = useAppTranslation('proposals');
  const { classes } = useStyles();
  const { state, loadMoreItems, itemCount, isItemLoaded } = useProposals();

  return (
    <>
      <NextSeo
        title={t('proposals') ?? undefined}
        openGraph={{
          title: t('proposals') ?? undefined,
        }}
      />
      <Layout navTitle={t('proposals') ?? undefined} className={classes.root}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <List
            items={state.items}
            rawDataTotal={state.rawDataTotal}
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
          />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Proposals;
