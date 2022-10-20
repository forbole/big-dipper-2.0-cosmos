export enum STAKE_STATUS {
  ACTIVATING = 'activating',
  ACTIVE = 'active',
  DEACTIVATING = 'deactivating',
  DEACTIVATED = 'deactivated',
  UNKNOWN = 'unknown'
}

export type OverviewType = {
  address: string;
  balance: TokenUnit;
  staker: string;
  withdrawer: string;
}

export type StakeInfoType = {
  status: STAKE_STATUS;
  delegated: TokenUnit;
  voter: string;
  activationEpoch: number;
  deactivationEpoch: number;
}

export type StakeAccountState = {
  loading: boolean;
  overview: OverviewType;
  stakeInfo: StakeInfoType;
}
