import * as R from 'ramda';
import { Categories } from '../types';

class MsgAddLimitOrder {
  public category: Categories;
  public type: string;
  public json: any;
  public owner: string;
  public clientOrderId: string;
  public timeInForce: 'Unspecified' | 'GoodTillCancel' | 'ImmediateOrCancel' | 'FillOrKill';
  public source: MsgCoin;
  public destination: MsgCoin;

  constructor(payload: any) {
    this.category = 'market';
    this.type = payload.type;
    this.json = payload.json;
    this.owner = payload.owner;
    this.clientOrderId = payload.clientOrderId;
    this.timeInForce = payload.timeInForce;
    this.source = payload.source;
    this.destination = payload.destination;
  }

  static fromJson(json: any): MsgAddLimitOrder {
    return {
      category: 'market',
      json,
      type: json['@type'],
      owner: json.owner,
      clientOrderId: R.pathOr('', ['client_order_id'], json),
      timeInForce: R.pathOr('Unspecified', ['time_in_force'], json),
      source: {
        denom: R.pathOr('', ['source', 'denom'], json),
        amount: R.pathOr('', ['source', 'amount'], json),
      },
      destination: {
        denom: R.pathOr('', ['destination', 'denom'], json),
        amount: R.pathOr('0', ['destination', 'amount'], json),
      },
    };
  }
}

export default MsgAddLimitOrder;
