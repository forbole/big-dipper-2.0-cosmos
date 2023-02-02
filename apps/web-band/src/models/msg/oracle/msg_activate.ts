import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgActivate {
  public category: Categories;

  public type: string;

  public json: object;

  public validator: string;

  constructor(payload: object) {
    this.category = 'oracle';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.validator = R.pathOr('', ['validator'], payload);
  }

  static fromJson(json: object): MsgActivate {
    return {
      category: 'oracle',
      json,
      type: R.pathOr('', ['@type'], json),
      validator: R.pathOr('', ['validator'], json),
    };
  }
}

export default MsgActivate;
