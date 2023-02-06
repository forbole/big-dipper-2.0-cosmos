import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCancelOrder {
  public category: Categories;

  public type: string;

  public json: object;

  public owner: string;

  public clientOrderId: string;

  constructor(payload: object) {
    this.category = 'market';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.owner = R.pathOr('', ['owner'], payload);
    this.clientOrderId = R.pathOr('', ['clientOrderId'], payload);
  }

  static fromJson(json: object): MsgCancelOrder {
    return {
      category: 'market',
      json,
      type: R.pathOr('', ['@type'], json),
      owner: R.pathOr('', ['owner'], json),
      clientOrderId: R.pathOr('', ['client_order_id'], json),
    };
  }
}

export default MsgCancelOrder;
