export type TransactionsListDestailsState = {
  className?: string;
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  loadNextPage?: (any) => void;
  loadMoreItems?: (any) => void;
  isItemLoaded?: (index: number) => boolean;
  itemCount: number;
  transactions: TransactionsDetails[];
}
