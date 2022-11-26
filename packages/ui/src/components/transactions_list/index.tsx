import React, { ComponentProps, FC } from 'react';
import dynamic from 'next/dynamic';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import { useStyles } from '@/components/transactions_list/styles';
import type { TransactionsListState } from '@/components/transactions_list/types';
import type DesktopType from '@/components/transactions_list/components/desktop';
import type MobileType from '@/components/transactions_list/components/mobile';

const Desktop = dynamic(() => import('@/components/transactions_list/components/desktop')) as FC<
  ComponentProps<typeof DesktopType>
>;
const Mobile = dynamic(() => import('@/components/transactions_list/components/mobile')) as FC<
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

  if (isDesktop) {
    return <Desktop className={classes.desktop} {...formatProps} />;
  }

  return <Mobile className={classes.mobile} {...formatProps} />;
};

export default TransactionsList;
