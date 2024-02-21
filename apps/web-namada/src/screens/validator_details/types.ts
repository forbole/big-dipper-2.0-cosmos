export interface OverviewType {
  validator: string;
  operatorAddress: string;
  selfDelegateAddress: string;
  description: string;
  website: string;
}

export interface StatusType {
  status: number;
  inActiveSet?: string;
  jailed: boolean;
  tombstoned: boolean;
  condition: number;
  liquidStaking: string;
  commission: number;
  signedBlockWindow: number;
  missedBlockCounter: number;
  maxRate: string;
}

export interface VotingPowerType {
  height: number;
  overall: TokenUnit;
  self: number;
  validatorStatus: number;
}

export interface ValidatorVPState {
  validatorVPExists: boolean;
  votingPower: VotingPowerType;
}

export interface ValidatorOverviewState {
  exists: boolean;
  overview: OverviewType;
  status: StatusType;
}

export interface ValidatorProfileState {
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  operatorAddress: string;
  selfDelegateAddress: string;
}
