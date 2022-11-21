import React, { ComponentProps, FC } from 'react';
import dynamic from 'next/dynamic';
import NoData from 'ui/components/no_data';
import { useScreenSize } from 'ui/hooks';
import { useStyles } from './styles';
import type { TransactionsListState } from './types';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as FC<
  ComponentProps<typeof DesktopType>
>;
const Mobile = dynamic(() => import('./components/mobile')) as FC<
  ComponentProps<typeof MobileType>
>;

const TransactionsList: FC<TransactionsListState> = (props) => {
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