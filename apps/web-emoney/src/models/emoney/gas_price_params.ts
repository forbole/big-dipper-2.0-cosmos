import * as R from 'ramda';

class GasPriceParams {
  public gasPrice: {
    denom: string;
    amount: string;
  }[];

  constructor(payload: any) {
    this.gasPrice = payload.gasPrice;
  }

  static fromJson(data: Array<{ denom: string; amount: number }>): GasPriceParams {
    return {
      gasPrice: data.map((x) => ({
        denom: R.pathOr('', ['denom'], x),
        amount: R.pathOr('0', ['amount'], x),
      })),
    };
  }
}

export default GasPriceParams;
