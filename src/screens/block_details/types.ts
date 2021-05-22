export type Overview = {
  height: number;
  hash: string;
  txs: number;
  timestamp: string;
  proposer: AvatarName;
  // votingPower: number;
}

export type Transactions = {
  height: number;
  hash: string;
  success: boolean;
  timestamp: string;
  messages: number;
}

export type BlockDetailState = {
  loading: boolean;
  exists: boolean;
  overview: Overview;
  signatures: AvatarName[];
  transactions: Transactions[];
}
