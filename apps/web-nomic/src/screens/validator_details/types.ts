export type OverviewType = {
  validator: string;
  operatorAddress: string;
  selfDelegateAddress: string;
  description: string;
  website: string;
};

export type StatusType = {
  inActiveSet: string;
  jailed: string;
  tombstoned: string;
  commission: number;
  signedBlockWindow: number;
  missedBlockCounter: number;
  maxRate: string;
};

export type VotingPowerType = {
  height: number;
  overall: TokenUnit;
  self: number;
};

export type ValidatorDetailsState = {
  loading: boolean;
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  overview: OverviewType;
  status: StatusType;
  votingPower: VotingPowerType;
};
