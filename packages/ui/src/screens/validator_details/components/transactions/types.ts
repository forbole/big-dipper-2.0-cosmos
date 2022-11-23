export interface TransactionState {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  offsetCount: number;
  data: Transactions[];
}
