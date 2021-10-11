export type TransactionsState = {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  rawDataTotal: number;
  items: Transactions[];
}
