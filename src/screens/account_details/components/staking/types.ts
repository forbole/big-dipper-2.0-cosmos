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

export type DelegationTypes = StakingType<DelegationType>;

export type StakingState = {
  tab: number;
  delegations: DelegationTypes;
}
