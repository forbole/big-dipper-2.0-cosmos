import * as R from 'ramda';
import { Categories } from '../types';

class MsgSwap {
  public category: Categories;
  public type: string;
  public json: any;
  public trader: string;
  public offerCoin: MsgCoin;
  public askDenom: string;

  constructor(payload: any) {
    this.category = 'market';
    this.type = payload.type;
    this.json = payload.json;
    this.trader = payload.trader;
    this.offerCoin = payload.offerCoin;
    this.askDenom = payload.askDenom;
  }

  static fromJson(json: any) {
    return new MsgSwap({
      json,
      type: json['@type'],
      trader: json.trader,
      offerCoin: {
        denom: R.pathOr('', ['offer_coin', 'denom'], json),
        amount: R.pathOr(0, ['offer_coin', 'amount'], json),
      },
      askDenom: R.pathOr('', ['ask_denom'], json),
    });
  }
}

export default MsgSwap;
