import { ApolloError } from '@apollo/client';

export type StakingType<T> = {
  data: T[];
  count: number | undefined;
  loading: boolean;
  error: ApolloError | undefined;
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
