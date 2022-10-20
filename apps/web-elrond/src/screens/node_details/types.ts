export type ProfileType = {
  name: string;
  version: string;
  pubkey: string;
  validator: string;
  identity: string;
  rating: number;
}

export type OverviewType = {
  shard: number;
  type: string;
  status: string;
  online: boolean;
  instances: number;
}

export type StatsType = {
  ignoredSignatures: number;
  leaderSuccess: number;
  leaderFailure: number;
  validatorSuccess: number;
  validatorFailure: number;
}

export type ConsensusType = {
  round: number;
  proposed: boolean;
}[];

export type NodeDetailsState = {
  loading: boolean;
  exists: boolean;
  profile: ProfileType;
  overview: OverviewType;
  stats: StatsType;
  consensus: ConsensusType;
  blocks: BlockType[];
}
