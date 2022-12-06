import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgHeight {
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

  static fromJson(json: object): MsgHeight {
    return {
      category: 'ibc',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
    };
  }
}

export default MsgHeight;
