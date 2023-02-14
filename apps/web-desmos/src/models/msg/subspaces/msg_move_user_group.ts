import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgMoveUserGroup {
  public category: Categories;

  public type: string;

  public json: object;

  public signer: string;

  constructor(payload: object) {
    this.category = 'subspaces';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
  }

  static fromJson(json: object): MsgMoveUserGroup {
    return {
      category: 'subspaces',
      type: R.pathOr('', ['@type'], json),
      json,
      signer: R.pathOr('', ['signer'], json),
    };
  }
}

export default MsgMoveUserGroup;
