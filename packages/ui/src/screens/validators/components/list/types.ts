import { Coin } from '@cosmjs/proto-signing';

export interface ValidatorType {
  validator: string;
  votingPower: number;
  votingPowerPercent: number;
  commission: number;
  condition: number;
  status: number;
  jailed: boolean;
  tombstoned: boolean;
  topVotingPower?: boolean; // top 34% VP
}

export interface ValidatorsState {
  loading: boolean;
  exists: boolean;
  tab: number;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
  votingPowerOverall: number;
  items: ValidatorType[];
}

export interface ValidatorsCoinsConditionType {
  validator: string;
  condition: number;
  status: number;
  coins: Coin[];
}

export interface ValidatorsAvatarNameType {
  validator: AvatarName & { condition: number; status: number };
  coins: Coin;
}

export type ValidatorWithAvatar = Override<ValidatorType, { validator: AvatarName }>;
