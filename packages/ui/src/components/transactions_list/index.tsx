import React from 'react';
import NoData from 'ui/components/no_data';
import { useScreenSize } from 'ui/hooks';
import { useStyles } from './styles';
import type { TransactionsListState } from './types';

import Desktop from './components/desktop';
import Mobile from './components/mobile';

const TransactionsList: React.FC<TransactionsListState> = (props) => {
  const { isDesktop } = useScreenSize();
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
  const classes = useStyles();

  const formatProps: TransactionsListState = {
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

  return (
    <>
      {isDesktop ? (
        <Desktop className={classes.desktop} {...formatProps} />
      ) : (
        <Mobile className={classes.mobile} {...formatProps} />
      )}
    </>
  );
};

export default TransactionsList;