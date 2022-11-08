export type TransactionType = {
  hash: string;
  from: string;
  to: string;
  timestamp: number;
  status: string;
};

export type TransactionState = {
  items: TransactionType[];
};
