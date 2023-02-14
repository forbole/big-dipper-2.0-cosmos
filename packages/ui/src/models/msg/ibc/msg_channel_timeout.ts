import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgTimeout {
  public category: Categories;

  public type: string;

  public signer: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'ibc';
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgTimeout {
    return {
      category: 'ibc',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
    };
  }
}

export default MsgTimeout;
