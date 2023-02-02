import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgMintFanToken {
  public category: Categories;

  public type: string;

  public json: object;

  public recipient: string;

  constructor(payload: object) {
    this.category = 'fantoken';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.recipient = R.pathOr('', ['recipient'], payload);
  }

  static fromJson(json: object): MsgMintFanToken {
    return {
      category: 'fantoken',
      json,
      type: R.pathOr('', ['@type'], json),
      recipient: R.pathOr('', ['recipient'], json),
    };
  }
}

export default MsgMintFanToken;
