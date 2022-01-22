export type StakingType<g> = {
  data: {
    [value:number]: g[];
  };
  count: number;
  loading: boolean;
}

export type DelegationType = {
  validator: string;
  amount: TokenUnit;
  reward: TokenUnit;
}

export type DelegationsType = StakingType<DelegationType>;

export type StakingState = {
  tab: number;
  delegations: DelegationsType;
}
