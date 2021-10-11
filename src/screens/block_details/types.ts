export type OverviewType = {
  height: number;
  hash: string;
  txs: number;
  timestamp: string;
  proposer: AvatarName;
  // votingPower: number;
}

export type BlockDetailState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  signatures: AvatarName[];
  transactions: Transactions[];
}
