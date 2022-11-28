import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgExecRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public signer: string;

  constructor(payload: object) {
    this.category = 'group';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
  }

  static fromJson(json: object): MsgExecRequest {
    return {
      category: 'group',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
    };
  }
}

export default MsgExecRequest;
