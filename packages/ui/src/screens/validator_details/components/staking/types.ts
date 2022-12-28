export type StakingType<g> = {
  data: {
    [value: number]: g[];
  };
  count: number;
  loading: boolean;
};

export interface DelegationType {
  address: string;
  amount: TokenUnit;
}

export interface RedelegationType {
  address: string;
  to: string;
  amount: TokenUnit;
  completionTime: string;
}

export interface UnbondingType {
  address: string;
  amount: TokenUnit;
  completionTime?: string;
}

export type DelegationsType = StakingType<DelegationType>;
export type RedelegationsType = StakingType<RedelegationType>;
export type UnbondingsType = StakingType<UnbondingType>;

export interface StakingState {
  tab: number;
}
