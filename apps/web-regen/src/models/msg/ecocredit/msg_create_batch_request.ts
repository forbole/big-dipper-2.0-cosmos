import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreateBatchRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public issuer: string;

  constructor(payload: object) {
    this.category = 'ecocredit';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.issuer = R.pathOr('', ['issuer'], payload);
  }

  static fromJson(json: object): MsgCreateBatchRequest {
    return {
      category: 'ecocredit',
      json,
      type: R.pathOr('', ['@type'], json),
      issuer: R.pathOr('', ['issuer'], json),
    };
  }
}

export default MsgCreateBatchRequest;
