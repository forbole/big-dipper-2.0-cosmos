import * as R from 'ramda';
import type { Categories } from '../types';

class MsgCancelReplaceLimitOrder {
  public category: Categories;

  public type: string;

  public json: any;

  public owner: string;

  public originalClientOrderId: string;

  public newClientOrderId: string;

  public timeInForce: 'Unspecified' | 'GoodTillCancel' | 'ImmediateOrCancel' | 'FillOrKill';

  public source: MsgCoin;

  public destination: MsgCoin;

  constructor(payload: any) {
    this.category = 'market';
    this.type = payload.type;
    this.json = payload.json;
    this.owner = payload.owner;
    this.originalClientOrderId = payload.originalClientOrderId;
    this.newClientOrderId = payload.newClientOrderId;
    this.timeInForce = payload.timeInForce;
    this.source = payload.source;
    this.destination = payload.destination;
  }

  static fromJson(json: any): MsgCancelReplaceLimitOrder {
    return {
      category: 'market',
      json,
      type: json['@type'],
      owner: json.owner,
      originalClientOrderId: R.pathOr('', ['original_client_order_id'], json),
      newClientOrderId: R.pathOr('', ['new_client_order_id'], json),
      timeInForce: R.pathOr('Unspecified', ['time_in_force'], json),
      source: {
        denom: R.pathOr('', ['source', 'denom'], json),
        amount: R.pathOr('', ['source', 'amount'], json),
      },
      destination: {
        denom: R.pathOr('', ['destination', 'denom'], json),
        amount: R.pathOr('', ['destination', 'amount'], json),
      },
    };
  }
}

export default MsgCancelReplaceLimitOrder;
