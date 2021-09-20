import * as R from 'ramda';
import { Categories } from '../types';

class MsgSwapSend {
  public category: Categories;
  public type: string;
  public json: any;
  public fromAddress: string;
  public toAddress: string;
  public offerCoin: MsgCoin;
  public askDenom: string;

  constructor(payload: any) {
    this.category = 'market';
    this.type = payload.type;
    this.json = payload.json;
    this.fromAddress = payload.fromAddress;
    this.toAddress = payload.toAddress;
    this.offerCoin = payload.offerCoin;
    this.askDenom = payload.askDenom;
  }

  static fromJson(json: any) {
    return new MsgSwapSend({
      json,
      type: json['@type'],
      fromAddress: R.pathOr('', ['from_address'], json),
      toAddress: R.pathOr('', ['to_address'], json),
      offerCoin: {
        denom: R.pathOr('', ['offer_coin', 'denom'], json),
        amount: R.pathOr(0, ['offer_coin', 'amount'], json),
      },
      askDenom: R.pathOr('', ['ask_denom'], json),
    });
  }
}

export default MsgSwapSend;
