import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';
import { List } from './components';
import { useProposals } from './hooks';

const Proposals = () => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const {
    state,
    loadMoreItems,
    itemCount,
    isItemLoaded,
  } = useProposals();

  return (
    <>
      <NextSeo
        title={t('proposals')}
        openGraph={{
          title: t('proposals'),
        }}
      />
      <Layout
        navTitle={t('proposals')}
        className={classes.root}
      >
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
