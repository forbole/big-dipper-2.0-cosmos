export type OverviewType = {
  validator: string;
  operatorAddress: string;
  selfDelegateAddress: string;
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

export type DelegationType = {
  delegator: string;
  amount: TokenUnit;
}

export type RedelegationType = {
  to: string;
  from: string;
  delegator: string;
  linkedUntil: string;
  amount: TokenUnit;
}

export type UndelegationType = {
  delegator: string;
  amount: TokenUnit;
  linkedUntil: string;
}

export type ValidatorDetailsState = {
  loading: boolean;
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  overview: OverviewType;
  status: StatusType;
  votingPower: VotingPowerType;
  delegations: {
    data: DelegationType[];
    count: number;
  }
  redelegations: {
    data: RedelegationType[];
    count: number;
  }
  undelegations: {
    data: UndelegationType[];
    count: number;
  }
  transactions: {
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    offsetCount: number;
    data: Transactions[];
  };
}
