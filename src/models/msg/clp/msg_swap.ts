import * as R from 'ramda';
import { Categories } from '../types';

class MsgSwap {
  public category: Categories;
  public type: string;
  public json: any;
  public signer: string;
  public sentAsset: {
    symbol: string;
  }
  public receivedAsset: {
    symbol: string;
  }
  public sentAmount: string;
  public minReceivingAmount: string;

  constructor(payload: any) {
    this.category = 'clp';
    this.json = payload.json;
    this.type = payload.type;
    this.signer = payload.signer;
    this.sentAsset = payload.sentAsset;
    this.receivedAsset = payload.receivedAsset;
    this.sentAmount = payload.sentAmount;
    this.minReceivingAmount = payload.minReceivingAmount;
  }

  static fromJson(json: any) {
    return new MsgSwap({
      json,
      type: json['@type'],
      signer: json.signer,
      sentAsset: {
        symbol: R.pathOr('', ['sent_asset', 'symbol'], json),
      },
      receivedAsset: {
        symbol: R.pathOr('', ['received_asset', 'symbol'], json),
      },
      sentAmount: R.pathOr('0', ['sent_amount'], json),
      minReceivingAmount: R.pathOr('0', ['min_receiving_amount'], json),
    });
  }
}

export default MsgSwap;
