import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  TransactionListDetails,
  TransactionsList,
  Box,
} from '@components';
import { useRecoilValue } from 'recoil';
import { readTx } from '@recoil/settings';
import { useStyles } from './styles';
import { useTransactions } from './hooks';

type TransactionComponent = {
  className?: string;
  collateralTransactions: boolean
}

const Transactions: React.FC<TransactionComponent> = (props) => {
  const txListFormat = useRecoilValue(readTx);
  const classes = useStyles();
  const { t } = useTranslation('transactions');

  const {
    state,
    loadNextPage,
  } = useTransactions(props.collateralTransactions);

  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !state.hasNextPage || index < state.data.length;
  const itemCount = state.hasNextPage ? state.data.length + 1 : state.data.length;

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {props.collateralTransactions ? t('collateralTransactions') : t('transactions')}
      </Typography>
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
          <TransactionListDetails
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
