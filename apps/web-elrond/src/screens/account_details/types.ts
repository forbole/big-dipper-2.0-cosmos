export interface ProfileType {
  address: string;
  username: string;
}

export interface OverviewType {
  balance: TokenUnit;
  developerReward: TokenUnit;
  shard: number;
  tokenCount: number;
}

export interface AccountDetailsType {
  loading: boolean;
  exists: boolean;
  profile: ProfileType;
  overview: OverviewType;
}
