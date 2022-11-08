import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import TransactionsListDetails from '@components/transactions_list_details';
import TransactionsList from '@components/transactions_list';
import Box from '@components/box';
import { useRecoilValue } from 'recoil';
import { readTx } from '@recoil/settings';
import { useStyles } from './styles';
import { useTransactions } from './hooks';

const Transactions: React.FC<ComponentDefault> = (props) => {
  const txListFormat = useRecoilValue(readTx);
  const classes = useStyles();
  const { t } = useTranslation('validators');

  const { state, loadNextPage } = useTransactions();

  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !state.hasNextPage || index < state.data.length;
  const itemCount = state.hasNextPage ? state.data.length + 1 : state.data.length;

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">{t('transactions')}</Typography>
      <div className={classes.list}>
        {txListFormat === 'compact' ? (
          <TransactionsList
            transactions={state.data}
            itemCount={itemCount}
            hasNextPage={state.hasNextPage}
            isNextPageLoading={state.isNextPageLoading}
            loadNextPage={loadNextPage}
            loadMoreItems={loadMoreItems}
            isItemLoaded={isItemLoaded}
          />
        ) : (
          <TransactionsListDetails
            transactions={state.data}
            itemCount={itemCount}
            hasNextPage={state.hasNextPage}
            isNextPageLoading={state.isNextPageLoading}
            loadNextPage={loadNextPage}
            loadMoreItems={loadMoreItems}
            isItemLoaded={isItemLoaded}
          />
        )}
      </div>
    </Box>
  );
};

export default Transactions;
