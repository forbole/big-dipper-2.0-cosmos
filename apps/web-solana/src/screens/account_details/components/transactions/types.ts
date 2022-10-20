export type TransactionsState = {
  loading: boolean;
  transactions: Transactions[];
  hasNextPage: boolean;
  isNextPageLoading: boolean;
}
