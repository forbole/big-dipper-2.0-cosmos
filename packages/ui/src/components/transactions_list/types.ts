export interface TransactionsListState {
  ['@type']?: string;
  className?: string;
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  loadNextPage?: (...args: unknown[]) => void;
  loadMoreItems?: (...args: unknown[]) => void;
  isItemLoaded?: (index: number) => boolean;
  itemCount: number;
  transactions: Transactions[];
}
