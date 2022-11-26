import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgStoreRawDataRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public sender: string;

  constructor(payload: object) {
    this.category = 'data';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
  }

  static fromJson(json: object): MsgStoreRawDataRequest {
    return {
      category: 'data',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
    };
  }
}

export default MsgStoreRawDataRequest;
