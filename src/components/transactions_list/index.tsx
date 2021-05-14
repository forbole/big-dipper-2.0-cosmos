import React from 'react';
import { NoData } from '@components';
import {
  Desktop,
  Mobile,
} from './components';
import { useStyles } from './styles';
import { TransactionsListState } from './types';

const TransactionsList: React.FC<TransactionsListState> = (props) => {
  const {
    hasNextPage = false,
    isNextPageLoading = false,
    loadNextPage = () => null,
    loadMoreItems = () => null,
    isItemLoaded = () => true,
    itemCount,
    rawDataTotal,
    formatUi,
  } = props;
  const classes = useStyles();

  const formatProps = {
    hasNextPage,
    isNextPageLoading,
    isItemLoaded,
    loadNextPage,
    loadMoreItems,
    itemCount,
    rawDataTotal,
    formatUi,
  };

  if (!itemCount) {
    return (
      <NoData />
    );
  }

  return (
    <>
      <Mobile
        className={classes.mobile}
        {...formatProps}
      />
      <Desktop
        className={classes.desktop}
        {...formatProps}
      />
    </>
  );
};

export default TransactionsList;
