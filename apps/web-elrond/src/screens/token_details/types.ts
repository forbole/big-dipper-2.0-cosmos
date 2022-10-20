export type ProfileType = {
  name: string;
  identifier: string;
  description: string;
  imageUrl: string;
}

export type OverviewType = {
  owner: string;
  decimals: number;
  website: string;
  email: string;
}

export type StatsType = {
  identifier: string;
  accounts: number;
  transactions: number;
  supply: string;
}

export type TokenDetailsState = {
  loading: boolean;
  exists: boolean;
  profile: ProfileType;
  overview: OverviewType;
  stats: StatsType;
}
