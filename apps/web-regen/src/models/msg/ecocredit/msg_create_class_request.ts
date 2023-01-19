import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreateClassRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public designer: string;

  constructor(payload: object) {
    this.category = 'ecocredit';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.designer = R.pathOr('', ['designer'], payload);
  }

  static fromJson(json: object): MsgCreateClassRequest {
    return {
      category: 'ecocredit',
      json,
      type: R.pathOr('', ['@type'], json),
      designer: R.pathOr('', ['designer'], json),
    };
  }
}

export default MsgCreateClassRequest;
