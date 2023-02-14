import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgRetireRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public holder: string;

  constructor(payload: object) {
    this.category = 'ecocredit';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.holder = R.pathOr('', ['holder'], payload);
  }

  static fromJson(json: object): MsgRetireRequest {
    return {
      category: 'ecocredit',
      json,
      type: R.pathOr('', ['@type'], json),
      holder: R.pathOr('', ['holder'], json),
    };
  }
}

export default MsgRetireRequest;
