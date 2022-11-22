import * as R from 'ramda';
import type { Categories } from '../types';

class MsgSend {
  public category: Categories;

  public type: string;

  public fromAddress: string;

  public toAddress: string;

  public amount: MsgCoin[];

  public json: any;

  constructor(payload: any) {
    this.category = 'bank';
    this.type = payload.type;
    this.fromAddress = payload.fromAddress;
    this.toAddress = payload.toAddress;
    this.amount = payload.amount;
    this.json = payload.json;
  }

  static fromJson(json: any): MsgSend {
    return {
      category: 'bank',
      json,
      type: json['@type'],
      fromAddress: json.from_address,
      toAddress: json.to_address,
      amount: json?.amount.map((x?: { denom: string; amount?: number }) => ({
        denom: x?.denom,
        amount: R.pathOr('0', ['amount'], x),
      })),
    };
  }
}

export default MsgSend;
