export type OverviewType = {
  validator: string;
  identity: string;
  voteKey: string;
  description: string;
  website: string;
}

export type StatusType = {
  status: number;
  jailed: boolean;
  condition: number;
  commission: number;
  signedBlockWindow: number;
  missedBlockCounter: number;
  lastSeen: string;
}

export type VotingPowerType = {
  height: number;
  overall: TokenUnit;
  self: number;
  selfDelegatePercent: number;
  selfDelegate: TokenUnit;
}

export type StakeType = {
  account: string;
  activationEpoch: number;
  amount: TokenUnit;
}

export type ValidatorDetailsState = {
  loading: boolean;
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  overview: OverviewType;
  status: StatusType;
  votingPower: VotingPowerType;
  activeStake: {
    data: StakeType[];
    count: number;
  }
  deactiveStake: {
    data: StakeType[];
    count: number;
  }
  transactions: {
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    offsetCount: number;
    data: Transactions[];
  };
}
