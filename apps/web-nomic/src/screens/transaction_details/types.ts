export type OverviewType = {
  hash: string;
  height: number;
  timestamp: string;
  fee: TokenUnit;
  gas: number;
  memo: string;
}

export type TransactionState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
}
