import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgAnswerPoll {
  public category: Categories;

  public type: string;

  public json: object;

  public signer: string;

  constructor(payload: object) {
    this.category = 'posts';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
  }

  static fromJson(json: object) {
    return {
      category: 'posts',
      type: R.pathOr('', ['@type'], json),
      json,
      signer: R.pathOr('', ['signer'], json),
    };
  }
}

export default MsgAnswerPoll;
