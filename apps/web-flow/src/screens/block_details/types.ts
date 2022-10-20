export type OverviewType = {
  height: number;
  hash: string;
  parentId: string;
  txs: number;
  timestamp: string;
}

export type BlockDetailState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  signatures: string[];
  transactions: Transactions[];
}
