import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUpdateGroupAdminRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public admin: string;

  public newAdmin: string;

  constructor(payload: object) {
    this.category = 'group';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.admin = R.pathOr('', ['admin'], payload);
    this.newAdmin = R.pathOr('', ['newAdmin'], payload);
  }

  static fromJson(json: object): MsgUpdateGroupAdminRequest {
    return {
      category: 'group',
      json,
      type: R.pathOr('', ['@type'], json),
      admin: R.pathOr('', ['admin'], json),
      newAdmin: R.pathOr('', ['new_admin'], json),
    };
  }
}

export default MsgUpdateGroupAdminRequest;
