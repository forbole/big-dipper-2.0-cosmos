import React from 'react';
import dynamic from 'next/dynamic';
import { NoData } from '@components';
import { useScreenSize } from '@hooks';
import { useStyles } from './styles';
import { TransactionsListState } from './types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

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
    <>
      {isDesktop ? (
        <Desktop
          className={classes.desktop}
          {...formatProps}
        />
      ) : (
        <Mobile
          className={classes.mobile}
          {...formatProps}
        />
      )}
    </>
  );
};

export default TransactionsList;
