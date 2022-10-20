export type TransactionType = {
  slot: number;
  signature: string;
  success: boolean;
  timestamp: string;
}

export type TransactionsState = {
  items: TransactionType[]
}
