export type OverviewType = {
  address: string;
  withdrawalAddress: string;
}

export type BalanceType = {
  available: TokenUnit;
  delegate: TokenUnit;
  unbonding: TokenUnit;
  reward: TokenUnit;
  commission?: TokenUnit;
  total: number;
}

export type TransactionType = {
  height: number;
  hash: string;
  success: boolean;
  timestamp: string;
  messages: number;
}

export type DelegationType = {
  validator: AvatarName;
  commission: number;
  amount: number;
  reward: number;
}

export type RedelegationType = {
  to: AvatarName;
  from: AvatarName;
  linkedUntil: string;
  amount: number;
}

export type UnbondingType = {
  validator: AvatarName;
  commission: number;
  amount: number;
  linkedUntil: string;
}

export type AccountDetailState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  balance: BalanceType;
  delegations: {
    data: DelegationType[];
    count: number;
  }
  redelegations: {
    data: RedelegationType[];
    count: number;
  }
  unbondings: {
    data: UnbondingType[];
    count: number;
  }
  transactions: {
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    offsetCount: number;
    data: TransactionType[];
  };
}
