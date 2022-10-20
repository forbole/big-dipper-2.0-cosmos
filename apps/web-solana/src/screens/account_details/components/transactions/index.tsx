import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  TransactionsList,
  Box,
} from '@components';
import { useTransactions } from './hooks';
import { useStyles } from './styles';

const Transactions: React.FC<ComponentDefault> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const {
    state, loadNextPage,
  } = useTransactions();
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !state.hasNextPage || index < state.transactions.length;
  const itemCount = state.hasNextPage ? state.transactions.length + 1 : state.transactions.length;

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {t('transactions')}
      </Typography>
      <div className={classes.list}>
        <TransactionsList
          transactions={state.transactions}
          itemCount={itemCount}
          className={classes.list}
          hasNextPage={state.hasNextPage}
          isNextPageLoading={state.isNextPageLoading}
          loadNextPage={loadNextPage}
          loadMoreItems={loadMoreItems}
          isItemLoaded={isItemLoaded}
        />
      </div>
    </Box>
  );
};

export default Transactions;
