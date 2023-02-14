import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCancelAuction {
  public category: Categories;

  public type: string;

  public json: object;

  public owner: string;

  public id: number;

  constructor(payload: object) {
    this.category = 'auction';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.owner = R.pathOr('', ['owner'], payload);
    this.id = R.pathOr(0, ['id'], payload);
  }

  static fromJson(json: object): MsgCancelAuction {
    return {
      category: 'auction',
      json,
      type: R.pathOr('', ['@type'], json),
      owner: R.pathOr('', ['owner'], json),
      id: R.pathOr(0, ['id'], json),
    };
  }
}

export default MsgCancelAuction;
