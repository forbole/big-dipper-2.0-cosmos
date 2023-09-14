export interface ValidatorType {
  validator: string;
  votingPower: number;
  votingPowerPercent: number;
  commission: number;
  inActiveSet: string;
  jailed: string;
  tombstoned: string;
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

export type {
  ValidatorsCoinsConditionType,
  ValidatorsAvatarNameType,
} from 'ui/screens/validators/components/list/types';
export type ValidatorWithAvatar = Override<ValidatorType, { validator: AvatarName }>;
