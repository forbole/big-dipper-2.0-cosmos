export interface ContractType {
  address: string;
  locked: TokenUnit;
  nodes: number;
  apr: number;
  commission: number;
  delegationCap: TokenUnit;
  delegators: number;
}

export interface StakeType {
  totalStaked: TokenUnit;
  locked: TokenUnit;
  stakePercent: number;
  stake: TokenUnit;
  topUp: TokenUnit;
}

export interface ProfileType {
  name: string;
  imageUrl: string;
  description: string;
}

export interface OverviewType {
  location: string;
  website: string;
  identity: string;
  stakeDistribution: {
    key: string;
    value: number;
  }[];
}

export interface ValidatorDetailsState {
  loading: boolean;
  exists: boolean;
  isProvider: boolean;
  contract: ContractType | null;
  stake: StakeType;
  profile: ProfileType;
  overview: OverviewType;
}
