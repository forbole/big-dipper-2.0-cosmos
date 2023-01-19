import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgEditFanToken {
  public category: Categories;

  public type: string;

  public json: object;

  public owner: string;

  constructor(payload: object) {
    this.category = 'fantoken';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.owner = R.pathOr('', ['owner'], payload);
  }

  static fromJson(json: object): MsgEditFanToken {
    return {
      category: 'fantoken',
      json,
      type: R.pathOr('', ['@type'], json),
      owner: R.pathOr('', ['owner'], json),
    };
  }
}

export default MsgEditFanToken;
