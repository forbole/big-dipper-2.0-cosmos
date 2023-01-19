import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgRevokeAllowance {
  public category: Categories;

  public type: string;

  public json: object;

  public granter: string;

  public grantee: string;

  constructor(payload: object) {
    this.category = 'feegrant';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.granter = R.pathOr('', ['granter'], payload);
    this.grantee = R.pathOr('', ['grantee'], payload);
  }

  static fromJson(json: object): MsgRevokeAllowance {
    return {
      category: 'feegrant',
      json,
      type: R.pathOr('', ['@type'], json),
      granter: R.pathOr('', ['granter'], json),
      grantee: R.pathOr('', ['grantee'], json),
    };
  }
}

export default MsgRevokeAllowance;
