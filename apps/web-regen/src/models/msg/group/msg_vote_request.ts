import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgVoteRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public voter: string;

  constructor(payload: object) {
    this.category = 'group';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.voter = R.pathOr('', ['voter'], payload);
  }

  static fromJson(json: object): MsgVoteRequest {
    return {
      category: 'group',
      json,
      type: R.pathOr('', ['@type'], json),
      voter: R.pathOr('', ['voter'], json),
    };
  }
}

export default MsgVoteRequest;
