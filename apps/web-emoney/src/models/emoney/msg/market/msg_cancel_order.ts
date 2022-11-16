import * as R from 'ramda';
import type { Categories } from '../types';

class MsgCancelOrder {
  public category: Categories;
  public type: string;
  public json: any;
  public owner: string;
  public clientOrderId: string;

  constructor(payload: any) {
    this.category = 'market';
    this.type = payload.type;
    this.json = payload.json;
    this.owner = payload.owner;
    this.clientOrderId = payload.clientOrderId;
  }

  static fromJson(json: any): MsgCancelOrder {
    return {
      category: 'market',
      json,
      type: json['@type'],
      owner: json.owner,
      clientOrderId: R.pathOr('', ['client_order_id'], json),
    };
  }
}

export default MsgCancelOrder;
