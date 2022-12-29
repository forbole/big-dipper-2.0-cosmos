export interface OverviewType {
  validator: string;
  operatorAddress: string;
  selfDelegateAddress: string;
  description: string;
  website: string;
}

export interface StatusType {
  inActiveSet: string;
  jailed: string;
  tombstoned: string;
  commission: number;
  signedBlockWindow: number;
  missedBlockCounter: number;
  maxRate: string;
}

export interface VotingPowerType {
  height: number;
  overall: TokenUnit;
  self: number;
}

export interface ValidatorDetailsState {
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  overview: OverviewType;
  status: StatusType;
  votingPower: VotingPowerType;
}
