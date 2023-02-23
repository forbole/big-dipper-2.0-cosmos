export interface ProfileType {
  name: string;
  identifier: string;
  description: string;
  imageUrl: string;
}

export interface OverviewType {
  owner: string;
  decimals: number;
  website: string;
  email: string;
}

export interface StatsType {
  identifier: string;
  accounts: number;
  transactions: number;
  supply: string;
}

export interface TokenDetailsState {
  loading: boolean;
  exists: boolean;
  profile: ProfileType;
  overview: OverviewType;
  stats: StatsType;
}
