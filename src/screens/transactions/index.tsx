import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  TransactionsList,
  Box,
  LoadAndExist,
} from '@components';
import { useStyles } from './styles';
import { useTransactions } from './hooks';

const Transactions = () => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const {
    state,
    loadNextPage,
  } = useTransactions();
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !state.hasNextPage || index < state.items.length;
  const itemCount = state.hasNextPage ? state.items.length + 1 : state.items.length;
  return (
    <>
      <NextSeo
        title={t('transactions')}
        openGraph={{
          title: t('transactions'),
        }}
      />
      <Layout
        navTitle={t('transactions')}
        className={classes.root}
      >
        <LoadAndExist
          exists={state.exists}
          loading={state.loading}
        >
          <Box className={classes.box}>
            <TransactionsList
              transactions={state.items}
              itemCount={itemCount}
              hasNextPage={state.hasNextPage}
              isNextPageLoading={state.isNextPageLoading}
              loadNextPage={loadNextPage}
              loadMoreItems={loadMoreItems}
              isItemLoaded={isItemLoaded}
            />
          </Box>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Transactions;
