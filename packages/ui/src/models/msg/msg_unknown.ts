import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgUnknown {
  public category: Categories;

  public type: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'others';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgUnknown {
    return {
      category: 'others',
      type: R.pathOr('', ['@type'], json),
      json,
    };
  }
}

export default MsgUnknown;
