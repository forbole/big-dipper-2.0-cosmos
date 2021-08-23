import * as R from 'ramda';
import { chainConfig } from '@configs';

class StakingParams {
  public bondDenom: string;
  public unbondingTime: number;
  public maxEntries: number;
  public historicalEntries: number;
  public maxValidators: number;
  public minCommissionRate: string;

  constructor(payload: any) {
    this.bondDenom = payload.bondDenom;
    this.unbondingTime = payload.unbondingTime;
    this.maxEntries = payload.maxEntries;
    this.historicalEntries = payload.historicalEntries;
    this.maxValidators = payload.maxValidators;
    this.minCommissionRate = payload.minCommissionRate;
  }

  static fromJson(data: any) {
    return new StakingParams({
      bondDenom: R.pathOr(chainConfig.primaryTokenUnit, ['bond_denom'], data),
      unbondingTime: R.pathOr(0, ['unbonding_time'], data),
      maxEntries: R.pathOr(0, ['max_entries'], data),
      historicalEntries: R.pathOr(0, ['historical_entries'], data),
      maxValidators: R.pathOr(0, ['max_validators'], data),
      minCommissionRate: R.pathOr(0, ['min_commission_rate'], data),
    });
  }
}

export default StakingParams;
