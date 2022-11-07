import * as R from 'ramda';

class MintParams {
  public blocksPerYear: number;
  public goalBonded: number;
  public inflationMax: number;
  public inflationMin: number;
  public inflationRateChange: number;
  public mintDenom: string;

  constructor(payload: any) {
    this.blocksPerYear = payload.blocksPerYear;
    this.goalBonded = payload.goalBonded;
    this.inflationMax = payload.inflationMax;
    this.inflationMin = payload.inflationMin;
    this.inflationRateChange = payload.inflationRateChange;
    this.mintDenom = payload.mintDenom;
  }

  static fromJson(data: any) {
    return new MintParams({
      blocksPerYear: R.pathOr(0, ['blocks_per_year'], data),
      goalBonded: R.pathOr(0, ['goal_bonded'], data),
      inflationMax: R.pathOr(0, ['inflation_max'], data),
      inflationMin: R.pathOr(0, ['inflation_min'], data),
      inflationRateChange: R.pathOr(0, ['inflation_rate_change'], data),
      mintDenom: R.pathOr(0, ['mint_denom'], data),
    });
  }
}

export default MintParams;
