export interface OverviewType {
  validator: string;
  operatorAddress: string;
  selfDelegateAddress: string;
  description: string;
  website: string;
}

export interface StatusType {
  inActiveSet?: string;
  jailed: boolean;
  tombstoned: boolean;
  commission: number;
  signedBlockWindow: number;
  missedBlockCounter: number;
  maxRate: string;
  status: number;
  condition: number;
}

export interface VotingPowerType {
  height: number;
  overall: TokenUnit;
  self: number;
  validatorStatus: number;
}

export interface ValidatorDetailsState {
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  overview: OverviewType;
  cosmosAddress?: string;
  status: StatusType;
  votingPower: VotingPowerType;
}

export interface ValidatorVPState {
  validatorVPExists: boolean;
  votingPower: VotingPowerType;
}
