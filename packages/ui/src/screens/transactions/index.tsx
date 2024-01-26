import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import { SetterOrUpdater, useRecoilState, useRecoilValue  } from 'recoil';
import Box from '@/components/box';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import TransactionsList from '@/components/transactions_list';
import TransactionsListDetails from '@/components/transactions_list_details';
import { readTx, writeFilterMsgTypes, writeOpenDialog, readOpenDialog } from '@/recoil/settings';
import { useTransactions } from '@/screens/transactions/hooks';
import useStyles from '@/screens/transactions/styles';
import { useEffect, useMemo } from 'react';

const Transactions = () => {
  const txListFormat = useRecoilValue(readTx);
  const { t } = useAppTranslation('transactions');
  const { classes, cx } = useStyles();
  const { state, loadNextPage } = useTransactions();
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index: number) => !state.hasNextPage || index < state.items.length;
  const itemCount = state.hasNextPage ? state.items.length + 1 : state.items.length;
  return (
    <>
      <NextSeo
        title={t('transactions') ?? undefined}
        openGraph={{
          title: t('transactions') ?? undefined,
        }}
      />
      <Layout navTitle={t('transactions') ?? undefined} className={classes.root}>
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
          </Box>{' '}
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Transactions;
