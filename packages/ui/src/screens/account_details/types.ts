export interface OverviewType {
  address: string;
  withdrawalAddress: string;
}

export interface BalanceType {
  available: TokenUnit;
  delegate: TokenUnit;
  unbonding: TokenUnit;
  reward: TokenUnit;
  commission?: TokenUnit;
  total: TokenUnit;
}

export interface OtherTokenType {
  denom: string;
  available: TokenUnit;
  reward: TokenUnit;
  commission: TokenUnit;
}

export interface RewardsType {
  [value: string]: TokenUnit;
}

export interface AccountDetailState {
  loading: boolean;
  balanceLoading: boolean;
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  overview: OverviewType;
  balance: BalanceType;
  otherTokens: {
    data: OtherTokenType[];
    count: number;
  };
  rewards: RewardsType;
}
