import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUpdateParams {
  public category: Categories;

  public type: string;

  public json: object;

  public authority: string;

  public params: string;

  constructor(payload: object) {
    this.category = 'posts';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.authority = R.pathOr('', ['authority'], payload);
    this.params = R.pathOr('', ['params'], payload);
  }

  static fromJson(json: object) {
    return {
      category: 'posts',
      type: R.pathOr('', ['@type'], json),
      json,
      authority: R.pathOr('', ['authority'], json),
      params: R.pathOr('', ['params'], json),
    };
  }
}

export default MsgUpdateParams;
