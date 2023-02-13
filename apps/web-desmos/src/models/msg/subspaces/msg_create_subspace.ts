import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreateSubspace {
  public category: Categories;

  public type: string;

  public json: object;

  public creator: string;

  public description: string;

  constructor(payload: object) {
    this.category = 'subspaces';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.creator = R.pathOr('', ['creator'], payload);
    this.description = R.pathOr('', ['description'], payload);
  }

  static fromJson(json: object): MsgCreateSubspace {
    return {
      category: 'subspaces',
      type: R.pathOr('', ['@type'], json),
      json,
      creator: R.pathOr('', ['creator'], json),
      description: R.pathOr('', ['description'], json),
    };
  }
}

export default MsgCreateSubspace;
