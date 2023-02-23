export interface TransactionType {
  hash: string;
  from: string;
  to: string;
  timestamp: number;
  status: string;
}

export interface TransactionState {
  items: TransactionType[];
}
