import * as R from 'ramda';

class GasPriceParams {
  public gasPrice: MsgCoin[];

  constructor(payload: object) {
    this.gasPrice = R.pathOr<MsgCoin[]>([], ['gasPrice'], payload);
  }

  static fromJson(data: MsgCoin[]): GasPriceParams {
    return {
      gasPrice: data.map((x) => ({
        denom: R.pathOr('', ['denom'], x),
        amount: R.pathOr('0', ['amount'], x),
      })),
    };
  }
}

export default GasPriceParams;
