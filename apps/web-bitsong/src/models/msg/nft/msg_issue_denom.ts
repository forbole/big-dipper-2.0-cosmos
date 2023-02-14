import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgIssueDenom {
  public category: Categories;

  public type: string;

  public json: object;

  public creators: string[];

  constructor(payload: object) {
    this.category = 'nft';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.creators = R.pathOr([], ['creators'], payload);
  }

  static fromJson(json: object): MsgIssueDenom {
    return {
      category: 'nft',
      json,
      type: R.pathOr('', ['@type'], json),
      creators: R.pathOr([], ['creators'], json),
    };
  }
}

export default MsgIssueDenom;
