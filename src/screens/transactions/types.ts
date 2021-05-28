export type TransactionType = {
  height: number;
  hash: string;
  success: boolean;
  timestamp: string;
  messages: number;
}

export type TransactionsState = {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  rawDataTotal: number;
  items: TransactionType[];
}
