export interface TransactionsListDetailsState {
  className?: string;
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  loadNextPage?: (...args: any[]) => void;
  loadMoreItems?: (...args: any[]) => void;
  isItemLoaded?: (index: number) => boolean;
  itemCount: number;
  transactions: Transactions[];
}
