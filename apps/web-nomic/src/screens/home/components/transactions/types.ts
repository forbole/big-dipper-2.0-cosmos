export type TransactionType = {
  height: number;
  hash: string;
  timestamp: string;
};

export type TransactionsState = {
  items: TransactionType[];
};
