import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgSignDataRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public signers: string[];

  constructor(payload: object) {
    this.category = 'data';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.signers = R.pathOr([], ['signers'], payload);
  }

  static fromJson(json: object): MsgSignDataRequest {
    return {
      category: 'data',
      json,
      type: R.pathOr('', ['@type'], json),
      signers: R.pathOr([], ['signers'], json),
    };
  }
}

export default MsgSignDataRequest;
