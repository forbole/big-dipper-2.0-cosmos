import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreateSection {
  public category: Categories;

  public type: string;

  public json: object;

  public creator: string;

  public name: string;

  constructor(payload: object) {
    this.category = 'reactions';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.creator = R.pathOr('', ['creator'], payload);
    this.name = R.pathOr('', ['name'], payload);
  }

  static fromJson(json: object) {
    return {
      category: 'reactions',
      type: R.pathOr('', ['@type'], json),
      json,
      creator: R.pathOr('', ['creator'], json),
      name: R.pathOr('', ['name'], json),
    };
  }
}

export default MsgCreateSection;
