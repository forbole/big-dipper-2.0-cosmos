export type TransactionType = {
  height: number;
  hash: string;
  type: string[];
  success: boolean;
  timestamp: string;
  messages: number;
};

export type TransactionsState = {
  items: TransactionType[];
};
