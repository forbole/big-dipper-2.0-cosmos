export type TransactionsState = {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  items: Transactions[];
}
