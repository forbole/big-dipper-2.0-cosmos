import React from 'react';
import { NoData } from '@components';
import { TransactionsListDetailsState } from './types';
import { List } from './components';

const TransactionsListDetails: React.FC<TransactionsListDetailsState> = (props) => {
  // setting fallback values
  const {
    hasNextPage = false,
    isNextPageLoading = false,
    loadNextPage = () => null,
    loadMoreItems = () => null,
    isItemLoaded = () => true,
    itemCount,
    transactions,
  } = props;

  const formatProps = {
    hasNextPage,
    isNextPageLoading,
    isItemLoaded,
    loadNextPage,
    loadMoreItems,
    itemCount,
    transactions,
  };

  if (!itemCount) {
    return (
      <NoData />
    );
  }

  return (
    <List {...formatProps} />
  );
};

export default TransactionsListDetails;
