import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreateGroupRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public admin: string;

  constructor(payload: object) {
    this.category = 'group';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.admin = R.pathOr('', ['admin'], payload);
  }

  static fromJson(json: object): MsgCreateGroupRequest {
    return {
      category: 'group',
      json,
      type: R.pathOr('', ['@type'], json),
      admin: R.pathOr('', ['admin'], json),
    };
  }
}

export default MsgCreateGroupRequest;
