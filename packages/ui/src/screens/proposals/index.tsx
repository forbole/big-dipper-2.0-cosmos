import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import { useStyles } from '@/screens/proposals/styles';
import List from '@/screens/proposals/components/list';
import { useProposals } from '@/screens/proposals/hooks';

const Proposals = () => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const { state, loadMoreItems, itemCount, isItemLoaded } = useProposals();

  return (
    <>
      <NextSeo
        title={t('proposals')}
        openGraph={{
          title: t('proposals'),
        }}
      />
      <Layout navTitle={t('proposals')} className={classes.root}>
        <List
          items={state.items}
          rawDataTotal={state.rawDataTotal}
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
        />
      </Layout>
    </>
  );
};

export default Proposals;
