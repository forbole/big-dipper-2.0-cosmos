export type OverviewType = {
  address: string;
  balance: TokenUnit;
  voter: string;
  withdrawer: string;
}

export type ValidatorProfileType = {
  address: string;
  name: string;
  description: string;
  website: string;
  imageUrl: string;
  active: boolean;
  commission: number;
  voteDistance: number;
  rootDistance: number;
}

export type SkipRateType = {
  epoch: number;
  skip: number;
  skipRate: number;
  total: number;
}

export type VoteAccountState = {
  loading: boolean;
  overview: OverviewType;
  validatorProfile: ValidatorProfileType;
  skipRate: SkipRateType;
}
