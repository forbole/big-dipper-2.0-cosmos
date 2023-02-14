import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgEditRegisteredReaction {
  public category: Categories;

  public type: string;

  public json: object;

  public user: string;

  public displayValue: string;

  constructor(payload: object) {
    this.category = 'reactions';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.user = R.pathOr('', ['user'], payload);
    this.displayValue = R.pathOr('', ['displayValue'], payload);
  }

  static fromJson(json: object): MsgEditRegisteredReaction {
    return {
      category: 'reactions',
      type: R.pathOr('', ['@type'], json),
      json,
      user: R.pathOr('', ['user'], json),
      displayValue: R.pathOr('', ['display_value'], json),
    };
  }
}

export default MsgEditRegisteredReaction;
