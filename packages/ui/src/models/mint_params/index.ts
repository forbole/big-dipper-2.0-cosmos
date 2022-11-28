import * as R from 'ramda';

class MintParams {
  public blocksPerYear: number;

  public goalBonded: number;

  public inflationMax: number;

  public inflationMin: number;

  public inflationRateChange: number;

  public mintDenom: string;

  constructor(payload: object) {
    this.blocksPerYear = R.pathOr(0, ['blocks_per_year'], payload);
    this.goalBonded = R.pathOr(0, ['goal_bonded'], payload);
    this.inflationMax = R.pathOr(0, ['inflationMax'], payload);
    this.inflationMin = R.pathOr(0, ['inflationMin'], payload);
    this.inflationRateChange = R.pathOr(0, ['inflationRateChange'], payload);
    this.mintDenom = R.pathOr('', ['mintDenom'], payload);
  }

  static fromJson(data: object): MintParams {
    return {
      blocksPerYear: R.pathOr(0, ['blocks_per_year'], data),
      goalBonded: R.pathOr(0, ['goal_bonded'], data),
      inflationMax: R.pathOr(0, ['inflation_max'], data),
      inflationMin: R.pathOr(0, ['inflation_min'], data),
      inflationRateChange: R.pathOr(0, ['inflation_rate_change'], data),
      mintDenom: R.pathOr('0', ['mint_denom'], data),
    };
  }
}

export default MintParams;
