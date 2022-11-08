import * as R from 'ramda';
import { Categories } from '../types';

class MsgAddMarketOrder {
  public category: Categories;
  public type: string;
  public json: any;
  public owner: string;
  public clientOrderId: string;
  public timeInForce: 'Unspecified' | 'GoodTillCancel' | 'ImmediateOrCancel' | 'FillOrKill';
  public source: string;
  public destination: MsgCoin;
  public maximumSlippage: string;

  constructor(payload: any) {
    this.category = 'market';
    this.type = payload.type;
    this.json = payload.json;
    this.owner = payload.owner;
    this.clientOrderId = payload.clientOrderId;
    this.timeInForce = payload.timeInForce;
    this.source = payload.source;
    this.destination = payload.destination;
    this.maximumSlippage = payload.maximumSlippage;
  }

  static fromJson(json: any) {
    return new MsgAddMarketOrder({
      json,
      type: json['@type'],
      owner: json.owner,
      clientOrderId: R.pathOr('', ['client_order_id'], json),
      timeInForce: R.pathOr('Unspecified', ['time_in_force'], json),
      source: R.pathOr('', ['source'], json),
      destination: {
        denom: R.pathOr('', ['destinationsource', 'denom'], json),
        amount: R.pathOr('', ['destination', 'amount'], json),
      },
      maximumSlippage: R.pathOr('', ['maximum_slippage'], json),
    });
  }
}

export default MsgAddMarketOrder;
