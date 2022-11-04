export type TabType = {
  id: number;
  key: string;
  component?: React.ReactNode;
};

export type ValidatorType = {
  validator: AvatarName;
  locked: TokenUnit;
  stake: TokenUnit;
  stakePercent: number;
  commission: number;
  nodes: number;
  apr: number;
  delegators: number;
  isNode: boolean;
};

export type SearchType = string;

export type ValidatorsState = {
  loading: boolean;
  exists: boolean;
  tab: number;
  search: SearchType;
  validators: ValidatorType[];
};
