import { ReactNode } from 'react';

export interface TabType {
  id: number;
  key: string;
  component?: ReactNode;
}

export interface ValidatorType {
  validator: AvatarName;
  locked: TokenUnit;
  stake: TokenUnit;
  stakePercent: number;
  commission: number;
  nodes: number;
  apr: number;
  delegators: number;
  isNode: boolean;
}

export type SearchType = string;

export interface ValidatorsState {
  loading: boolean;
  exists: boolean;
  tab: number;
  search: SearchType;
  validators: ValidatorType[];
}
