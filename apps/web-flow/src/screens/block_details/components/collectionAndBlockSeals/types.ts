export type TabType = {
  id: number;
  key: string;
  component?: React.ReactNode;
};

export type ValidatorType = {
  validator: AvatarName;
  stake: TokenUnit;
  locked: TokenUnit;
  topUp: TokenUnit;
  stakePercent: number;
  nodes: number;
};

export type ProviderType = {
  validator: AvatarName;
  stake: TokenUnit;
  nodes: number;
  commission: number;
  apr: number;
  delegators: number;
};

export type SearchType = string;

export type ValidatorsState = {
  loading: boolean;
  exists: boolean;
  tab: number;
  search: SearchType;
  validators: ValidatorType[];
  providers: ProviderType[];
};
