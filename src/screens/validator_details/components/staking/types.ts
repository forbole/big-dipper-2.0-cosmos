export type StakingType<g> = {
  data: {
    [value:number]: g[];
  };
  count: number;
  loading: boolean;
}

export type DelegationType = {
  address: string;
  amount: TokenUnit;
}

export type RedelegationType = {
  address: string;
  to: string;
  entries: {
    amount: TokenUnit;
    completionTime: string;
  }[];
}

export type UnbondingType = {
  address: string;
  entries: {
    amount: TokenUnit;
    completionTime: string;
  }[];
}

export type DelegationsType = StakingType<DelegationType>;
export type RedelegationsType = StakingType<RedelegationType>;
export type UnbondingsType = StakingType<UnbondingType>;

export type StakingState = {
  tab: number;
  delegations: DelegationsType;
  redelegations: RedelegationsType;
  unbondings: UnbondingsType;
}
