import React from 'react';
import NoData from 'ui/components/no_data';
import type { TransactionsListDetailsState } from './types';
import List from './components/list';

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

  const formatProps: TransactionsListDetailsState = {
    hasNextPage,
    isNextPageLoading,
    isItemLoaded,
    loadNextPage,
    loadMoreItems,
    itemCount,
    transactions,
  };

  if (!itemCount) {
    return <NoData />;
  }

  return <List {...formatProps} />;
};

export default TransactionsListDetails;
