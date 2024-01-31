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

export interface AccountBalanceState {
  loading: boolean;
  exists: boolean;
  balance: BalanceType;
  otherTokens: {
    data: OtherTokenType[];
    count: number;
  };
  rewards: RewardsType;
}

export interface AccountDesmosProfileState {
  exists: boolean;
  loading: boolean;
  desmosProfile: DesmosProfile | null;
}

export interface AccountWithdrawalAddressState {
  loading: boolean;
  overview: OverviewType;
}

export interface AccountRewardsState {
  loading: boolean;
  rewards: RewardsType;
}
