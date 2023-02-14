import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgRemoveUserFromUserGroup {
  public category: Categories;

  public type: string;

  public json: object;

  public signer: string;

  public user: string;

  constructor(payload: object) {
    this.category = 'subspaces';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.user = R.pathOr('', ['user'], payload);
  }

  static fromJson(json: object): MsgRemoveUserFromUserGroup {
    return {
      category: 'subspaces',
      type: R.pathOr('', ['@type'], json),
      json,
      signer: R.pathOr('', ['signer'], json),
      user: R.pathOr('', ['user'], json),
    };
  }
}

export default MsgRemoveUserFromUserGroup;
