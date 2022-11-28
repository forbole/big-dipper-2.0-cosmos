export type StakingType<g> = {
  data: {
    [value: number]: g[];
  };
  count: number;
  loading: boolean;
};

export interface DelegationType {
  validator: string;
  amount: TokenUnit;
  reward: TokenUnit;
}

export interface RedelegationType {
  from: string;
  to: string;
  amount: TokenUnit;
  completionTime: string;
}

export interface UnbondingType {
  validator: string;
  amount: TokenUnit;
  completionTime: string;
}

export type DelegationsType = StakingType<DelegationType>;
export type RedelegationsType = StakingType<RedelegationType>;
export type UnbondingsType = StakingType<UnbondingType>;

export interface StakingState {
  tab: number;
  delegations: DelegationsType;
  redelegations: RedelegationsType;
  unbondings: UnbondingsType;
}
