export type OverviewType = {
  height: number;
  hash: string;
  txs: number;
  timestamp: string;
  proposer: string;
  // votingPower: number;
}

export type BlockDetailState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  signatures: string[];
  transactions: Transactions[];
}
