export interface TransactionType {
  height: number;
  hash: string;
  timestamp: string;
}

export interface TransactionsState {
  loading: boolean;
  items: TransactionType[];
}
