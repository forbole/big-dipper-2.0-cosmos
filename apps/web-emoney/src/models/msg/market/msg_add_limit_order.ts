import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgAddLimitOrder {
  public category: Categories;

  public type: string;

  public json: object;

  public owner: string;

  public clientOrderId: string;

  public timeInForce: 'Unspecified' | 'GoodTillCancel' | 'ImmediateOrCancel' | 'FillOrKill';

  public source: MsgCoin;

  public destination: MsgCoin;

  constructor(payload: object) {
    this.category = 'market';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.owner = R.pathOr('', ['owner'], payload);
    this.clientOrderId = R.pathOr('', ['clientOrderId'], payload);
    this.timeInForce = R.pathOr('Unspecified', ['timeInForce'], payload);
    this.source = R.pathOr({ denom: '', amount: '0' }, ['source'], payload);
    this.destination = R.pathOr({ denom: '', amount: '0' }, ['destination'], payload);
  }

  static fromJson(json: object): MsgAddLimitOrder {
    return {
      category: 'market',
      json,
      type: R.pathOr('', ['@type'], json),
      owner: R.pathOr('', ['owner'], json),
      clientOrderId: R.pathOr('', ['client_order_id'], json),
      timeInForce: R.pathOr('Unspecified', ['time_in_force'], json),
      source: R.pathOr({ denom: '', amount: '0' }, ['source', 'denom'], json),
      destination: R.pathOr({ denom: '', amount: '0' }, ['destination', 'denom'], json),
    };
  }
}

export default MsgAddLimitOrder;
