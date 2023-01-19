import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgBurnFanToken {
  public category: Categories;

  public type: string;

  public json: object;

  public sender: string;

  constructor(payload: object) {
    this.category = 'fantoken';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
  }

  static fromJson(json: object): MsgBurnFanToken {
    return {
      category: 'fantoken',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
    };
  }
}

export default MsgBurnFanToken;
