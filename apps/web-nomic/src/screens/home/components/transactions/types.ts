export type TransactionType = {
  height: number;
  hash: string;
  type: string[];
  timestamp: string;
};

export type TransactionsState = {
  items: TransactionType[];
};
