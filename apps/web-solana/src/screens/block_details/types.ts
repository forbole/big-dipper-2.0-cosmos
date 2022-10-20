export type OverviewType = {
  slot: number;
  hash: string;
  leader: string;
  timestamp: string;
  txs: number;
}

export type BlockDetailState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  transactions: Transactions[];
}
