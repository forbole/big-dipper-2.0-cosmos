import { FC } from 'react';
import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Desktop from '@/components/transactions_list/components/desktop';
import Mobile from '@/components/transactions_list/components/mobile';
import type { TransactionsListState } from '@/components/transactions_list/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';

const TransactionsList: FC<TransactionsListState> = (props) => {
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
  const display = useDisplayStyles().classes;

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

  return (
    <>
      <Desktop className={display.hiddenUntilLg} {...formatProps} />
      <Mobile className={display.hiddenWhenLg} {...formatProps} />
    </>
  );
};

export default TransactionsList;
