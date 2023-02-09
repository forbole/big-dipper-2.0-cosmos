import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgRemoveReaction {
  public category: Categories;

  public type: string;

  public json: object;

  public user: string;

  constructor(payload: object) {
    this.category = 'reactions';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.user = R.pathOr('', ['user'], payload);
  }

  static fromJson(json: object): MsgRemoveReaction {
    return {
      category: 'reactions',
      type: R.pathOr('', ['@type'], json),
      json,
      user: R.pathOr('', ['user'], json),
    };
  }
}

export default MsgRemoveReaction;
