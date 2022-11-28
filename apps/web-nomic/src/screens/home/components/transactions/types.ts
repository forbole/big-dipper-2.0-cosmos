export interface TransactionType {
  height: number;
  hash: string;
  timestamp: string;
}

export interface TransactionsState {
  items: TransactionType[];
}
