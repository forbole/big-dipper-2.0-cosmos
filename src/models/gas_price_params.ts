import * as R from 'ramda';

class GasPriceParams {
  public gasPrice: {
    denom: string;
    price: string;
  }[];

  constructor(payload: any) {
    this.gasPrice = payload.gasPrice;
  }

  static fromJson(data: any) {
    return new GasPriceParams({
      gasPrice: data.map((x) => {
        return ({
          denom: R.pathOr('', ['denom'], x),
          price: R.pathOr('0', ['price'], x),
        });
      }),
    });
  }
}

export default GasPriceParams;
