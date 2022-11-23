import Layout from '@/components/layout';
import TransactionsList from '@/components/transactions_list';
import TransactionsListDetails from '@/components/transactions_list_details';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Box from '@/components/box';
import LoadAndExist from '@/components/load_and_exist';
import { readTx } from '@/recoil/settings';
import { useTransactions } from '@/screens/transactions/hooks';
import { useStyles } from '@/screens/transactions/styles';

const Transactions = () => {
  const txListFormat = useRecoilValue(readTx);
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const { state, loadNextPage } = useTransactions();
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index: number) => !state.hasNextPage || index < state.items.length;
  const itemCount = state.hasNextPage ? state.items.length + 1 : state.items.length;
  return (
    <>
      <NextSeo
        title={t('transactions')}
        openGraph={{
          title: t('transactions'),
        }}
      />
      <Layout navTitle={t('transactions')} className={classes.root}>
        <LoadAndExist exists={state.exists} loading={state.loading}>
          <Box className={classes.box}>
            {txListFormat === 'compact' ? (
              <TransactionsList
                transactions={state.items}
                itemCount={itemCount}
                hasNextPage={state.hasNextPage}
                isNextPageLoading={state.isNextPageLoading}
                loadNextPage={loadNextPage}
                loadMoreItems={loadMoreItems}
                isItemLoaded={isItemLoaded}
              />
            ) : (
              <TransactionsListDetails
                transactions={state.items}
                itemCount={itemCount}
                hasNextPage={state.hasNextPage}
                isNextPageLoading={state.isNextPageLoading}
                loadNextPage={loadNextPage}
                loadMoreItems={loadMoreItems}
                isItemLoaded={isItemLoaded}
              />
            )}
          </Box>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Transactions;
