export interface OverviewType {
  hash: string;
  height: number;
  timestamp: string;
  fee: TokenUnit;
  gas: number;
  memo: string;
}

export interface TransactionState {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
}
