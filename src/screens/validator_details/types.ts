export type OverviewType = {
  validator: {
    imageUrl: string;
    moniker: string;
  };
  operatorAddress: string;
  selfDelegateAddress: string;
  description: string;
  status: number;
  jailed: boolean;
  website: string;
  condition: number;
  commission: number;
  signedBlockWindow: number;
  missedBlockCounter: number;
}

export type TransactionType = {
  height: number;
  hash: string;
  success: boolean;
  timestamp: string;
  messages: number;
}

export type VotingPowerType = {
  height: number;
  overall: number;
  self: number;
  selfDelegatePercent: number;
  selfDelegate: number;
}

export type DelegationType = {
  delegator: AvatarName;
  amount: number;
}

export type RedelegationType = {
  to: AvatarName;
  from: AvatarName;
  delegator: AvatarName;
  linkedUntil: string;
  amount: number;
}

export type UndelegationType = {
  delegator: AvatarName;
  amount: number;
  linkedUntil: string;
}

export type ValidatorDetailsState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
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
    data: TransactionType[];
  };
}
