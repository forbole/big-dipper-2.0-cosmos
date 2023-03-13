import * as R from 'ramda';
import chainConfig from '@/chainConfig';

const { primaryTokenUnit } = chainConfig();

class StakingParams {
  public bondDenom: string;

  public unbondingTime: number;

  public maxEntries: number;

  public historicalEntries: number;

  public maxValidators: number;

  constructor(payload: object) {
    this.bondDenom = R.pathOr('', ['bondDenom'], payload);
    this.unbondingTime = R.pathOr(0, ['unbondingTime'], payload);
    this.maxEntries = R.pathOr(0, ['maxEntries'], payload);
    this.historicalEntries = R.pathOr(0, ['historicalEntries'], payload);
    this.maxValidators = R.pathOr(0, ['maxValidators'], payload);
  }

  static fromJson(data: object): StakingParams {
    return {
      bondDenom: R.pathOr(primaryTokenUnit, ['bond_denom'], data),
      unbondingTime: R.pathOr(0, ['unbonding_time'], data),
      maxEntries: R.pathOr(0, ['max_entries'], data),
      historicalEntries: R.pathOr(0, ['historical_entries'], data),
      maxValidators: R.pathOr(0, ['max_validators'], data),
    };
  }
}
export class customStakingParams {
  public minSelfDelegation: number;

  constructor(payload: object) {
    this.minSelfDelegation = R.pathOr(0, ['minSelfDelegation'], payload);
  }
  static fromJson(data: object): customStakingParams {
    return {
      minSelfDelegation: R.pathOr(0, ['min_self_delegation'], data),
    };
  }
}

export default StakingParams;
