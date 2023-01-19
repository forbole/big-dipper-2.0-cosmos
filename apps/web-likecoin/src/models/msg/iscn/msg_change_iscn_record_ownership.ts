import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgChangeIscnRecordOwnership {
  public category: Categories;

  public type: string;

  public json: object;

  public from: string;

  public iscnId: string;

  public newOwner: string;

  constructor(payload: object) {
    this.category = 'iscn';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.iscnId = R.pathOr('', ['iscnId'], payload);
    this.from = R.pathOr('', ['from'], payload);
    this.newOwner = R.pathOr('', ['newOwner'], payload);
  }

  static fromJson(json: object): MsgChangeIscnRecordOwnership {
    return {
      category: 'iscn',
      json,
      type: R.pathOr('', ['@type'], json),
      iscnId: R.pathOr('', ['iscn_id'], json),
      from: R.pathOr('', ['from'], json),
      newOwner: R.pathOr('', ['new_owner'], json),
    };
  }
}

export default MsgChangeIscnRecordOwnership;
