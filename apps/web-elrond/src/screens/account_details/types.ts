export type ProfileType = {
  address: string;
  username: string;
};

export type OverviewType = {
  balance: TokenUnit;
  developerReward: TokenUnit;
  shard: number;
  tokenCount: number;
};

export type AccountDetailsType = {
  loading: boolean;
  exists: boolean;
  profile: ProfileType;
  overview: OverviewType;
};
