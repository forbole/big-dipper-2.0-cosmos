export interface ProfileType {
  name: string;
  version: string;
  pubkey: string;
  validator: string;
  identity: string;
  rating: number;
}

export interface OverviewType {
  shard: number;
  type: string;
  status: string;
  online: boolean;
  instances: number;
}

export interface StatsType {
  ignoredSignatures: number;
  leaderSuccess: number;
  leaderFailure: number;
  validatorSuccess: number;
  validatorFailure: number;
}

export type ConsensusType = Array<{
  round: number;
  proposed: boolean;
}>;

export interface NodeDetailsState {
  loading: boolean;
  exists: boolean;
  profile: ProfileType;
  overview: OverviewType;
  stats: StatsType;
  consensus: ConsensusType;
  blocks: BlockType[];
}
