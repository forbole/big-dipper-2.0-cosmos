export interface OverviewType {
  height: number;
  hash: string;
  txs: number;
  timestamp: string;
  proposer: string;
  // votingPower: number;
}

export interface BlockDetailState {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  signatures: string[];
  transactions: Transactions[];
}
