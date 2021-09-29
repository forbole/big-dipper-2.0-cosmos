import * as R from 'ramda';

class InflationRateParams {
  public denom: string;
  public inflation: string;

  constructor(payload: any) {
    this.denom = payload.denom;
    this.inflation = payload.inflation;
  }

  static fromJson(data: any) {
    return new InflationRateParams({
      denom: R.pathOr(0, ['denom'], data),
      inflation: R.pathOr(0, ['inflation'], data),
    });
  }
}

export default InflationRateParams;
