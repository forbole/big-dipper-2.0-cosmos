import * as R from 'ramda';

class InflationRateParams {
  public inflation: {
    denom: string;
    inflation: string;
  }[];

  constructor(payload: any) {
    this.inflation = payload.inflation;
  }

  static fromJson(data: Array<{ denom: string; amount: number }>) {
    return new InflationRateParams({
      inflation: data.map((x) => {
        return {
          denom: R.pathOr('', ['denom'], x),
          inflation: R.pathOr('0', ['inflation'], x),
        };
      }),
    });
  }
}

export default InflationRateParams;
