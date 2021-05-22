export type BlockDetailState = {
  loading: boolean;
  exists: boolean;
  overview: {
    height: number;
    hash: string;
    txs: number;
    timestamp: string;
    proposer: AvatarName;
    votingPower: number;
  }
  signatures: AvatarName[];
}
