import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Desktop from '@/components/transactions_list/components/desktop';
import Mobile from '@/components/transactions_list/components/mobile';
import useStyles from '@/components/transactions_list/styles';
import type { TransactionsListState } from '@/components/transactions_list/types';
import { useScreenSize } from '@/hooks';
import { FC } from 'react';

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
  const { classes } = useStyles();

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
    return isNextPageLoading ? <Loading /> : <NoData />;
  }

  if (isDesktop) {
    return <Desktop className={classes.desktop} {...formatProps} />;
  }

  return <Mobile className={classes.mobile} {...formatProps} />;
};

export default TransactionsList;
