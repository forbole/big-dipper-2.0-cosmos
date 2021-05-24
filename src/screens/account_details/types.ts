export type OverviewType = {
  address: string;
  withdrawalAddress: string;
}

export type BalanceType = {
  available: number;
  delegate: number;
  unbonding: number;
  reward: number;
  commission?: number;
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
  staking: {
    delegations: DelegationType[];
    redelegations: RedelegationType[];
    unbondings: UnbondingType[];
  }
  // transactions: TransactionType[];
}
