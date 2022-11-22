export type StakingType<g> = {
  data: {
    [value: number]: g[];
  };
  count: number;
  loading: boolean;
};

export type DelegationType = {
  validator: string;
  amount: TokenUnit;
  reward: TokenUnit;
};

export type RedelegationType = {
  from: string;
  to: string;
  amount: TokenUnit;
  completionTime: string;
};

export type UnbondingType = {
  validator: string;
  amount: TokenUnit;
  completionTime: string;
};

export type DelegationsType = StakingType<DelegationType>;
export type RedelegationsType = StakingType<RedelegationType>;
export type UnbondingsType = StakingType<UnbondingType>;

export type StakingState = {
  tab: number;
  delegations: DelegationsType;
  redelegations: RedelegationsType;
  unbondings: UnbondingsType;
};
