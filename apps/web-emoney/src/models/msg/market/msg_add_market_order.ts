import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgAddMarketOrder {
  public category: Categories;

  public type: string;

  public json: object;

  public owner: string;

  public clientOrderId: string;

  public timeInForce: 'Unspecified' | 'GoodTillCancel' | 'ImmediateOrCancel' | 'FillOrKill';

  public source: string;

  public destination: MsgCoin;

  public maximumSlippage: string;

  constructor(payload: object) {
    this.category = 'market';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.owner = R.pathOr('', ['owner'], payload);
    this.clientOrderId = R.pathOr('', ['clientOrderId'], payload);
    this.timeInForce = R.pathOr('Unspecified', ['timeInForce'], payload);
    this.source = R.pathOr('', ['source'], payload);
    this.destination = R.pathOr({ denom: '', amount: '0' }, ['destination'], payload);
    this.maximumSlippage = R.pathOr('', ['maximumSlippage'], payload);
  }

  static fromJson(json: object): MsgAddMarketOrder {
    return {
      category: 'market',
      json,
      type: R.pathOr('', ['@type'], json),
      owner: R.pathOr('', ['owner'], json),
      clientOrderId: R.pathOr('', ['client_order_id'], json),
      timeInForce: R.pathOr('Unspecified', ['time_in_force'], json),
      source: R.pathOr('', ['source'], json),
      destination: R.pathOr({ denom: '', amount: '0' }, ['destinationsource', 'denom'], json),
      maximumSlippage: R.pathOr('', ['maximum_slippage'], json),
    };
  }
}

export default MsgAddMarketOrder;
