import * as R from 'ramda';

class InflationRateParams {
  public inflation: {
    denom: string;
    inflation: string;
  }[];

  constructor(payload: object) {
    this.inflation = R.pathOr([], ['inflation'], payload);
  }

  static fromJson(data: MsgCoin[]): InflationRateParams {
    return {
      inflation: data.map((x) => ({
        denom: R.pathOr('', ['denom'], x),
        inflation: R.pathOr('0', ['inflation'], x),
      })),
    };
  }
}

export default InflationRateParams;
