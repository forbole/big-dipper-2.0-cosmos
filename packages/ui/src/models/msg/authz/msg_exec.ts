import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgGrant {
  public category: Categories;

  public type: string;

  public json: object;

  public grantee: string;

  public messages: object[];

  constructor(payload: object) {
    this.category = 'authz';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.grantee = R.pathOr('', ['grantee'], payload);
    this.messages = R.pathOr([], ['messages'], payload);
  }

  static fromJson(json: object): MsgGrant {
    return {
      category: 'authz',
      json,
      type: R.pathOr('', ['@type'], json),
      grantee: R.pathOr('', ['grantee'], json),
      messages: R.pathOr([], ['msgs'], json),
    };
  }
}

export default MsgGrant;
