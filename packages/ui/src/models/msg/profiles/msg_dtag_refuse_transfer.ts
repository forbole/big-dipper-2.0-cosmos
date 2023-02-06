import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgDtagRefuseTransfer {
  public category: Categories;

  public type: string;

  public json: object;

  public sender: string;

  public receiver: string;

  constructor(payload: object) {
    this.category = 'profiles';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.receiver = R.pathOr('', ['receiver'], payload);
  }

  static fromJson(json: object): MsgDtagRefuseTransfer {
    return {
      category: 'profiles',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      receiver: R.pathOr('', ['receiver'], json),
    };
  }
}

export default MsgDtagRefuseTransfer;
