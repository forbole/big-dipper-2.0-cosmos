import * as R from 'ramda';
import type { Categories } from '../types';

class MsgTransfer {
  public category: Categories;
  public type: string;
  public sender: string;
  public receiver: string;
  public token: MsgCoin;
  public sourceChannel: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'ibc-transfer';
    this.type = payload.type;
    this.sender = payload.sender;
    this.receiver = payload.receiver;
    this.token = payload.token;
    this.sourceChannel = payload.sourceChannel;
    this.json = payload.json;
  }

  static fromJson(json: any): MsgTransfer {
    return {
      category: 'ibc-transfer',
      json,
      type: json['@type'],
      sender: json.sender,
      receiver: json.receiver,
      token: {
        denom: R.pathOr('', ['token', 'denom'], json),
        amount: R.pathOr('0', ['token', 'amount'], json),
      },
      sourceChannel: json.source_channel,
    };
  }
}

export default MsgTransfer;
