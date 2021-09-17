import * as R from 'ramda';
import { Categories } from '../types';

class MsgCancelReplaceLimitOrder {
  public category: Categories;
  public type: string;
  public json: any;
  public owner: string;
  public clientOrderId: string;
  public newClientOrderId: string;
  public timeInForce: 'Unspecified' | 'GoodTillCancel' | 'ImmediateOrCancel' | 'FillOrKill';
  public source: string;
  public destination: MsgCoin;

  constructor(payload: any) {
    this.category = 'market';
    this.type = payload.type;
    this.json = payload.json;
    this.owner = payload.owner;
    this.clientOrderId = payload.clientOrderId;
    this.newClientOrderId = payload.newClientOrderId;
    this.timeInForce = payload.timeInForce;
    this.source = payload.source;
    this.destination = payload.destination;
  }

  static fromJson(json: any) {
    return new MsgCancelReplaceLimitOrder({
      json,
      type: json['@type'],
      owner: json.owner,
      clientOrderId: R.pathOr('', ['client_order_id'], json),
      newClientOrderId: R.pathOr('', ['new_client_order_id'], json),
      timeInForce: R.pathOr('Unspecified', ['time_in_force'], json),
      source: R.pathOr('', ['source'], json),
      destination: {
        denom: R.pathOr('', ['source', 'denom'], json),
        amount: R.pathOr('', ['source', 'amount'], json),
      },
    });
  }
}

export default MsgCancelReplaceLimitOrder;
