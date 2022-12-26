export interface TransactionType {
  height: number;
  hash: string;
  type: string[];
  success: boolean;
  timestamp: string;
  messages: number;
}

export interface TransactionsState {
  loading: boolean;
  items: TransactionType[];
}
