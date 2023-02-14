import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgDtagAcceptTransfer {
  public category: Categories;

  public type: string;

  public json: object;

  public sender: string;

  public receiver: string;

  public newDtag: string;

  constructor(payload: object) {
    this.category = 'profiles';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.receiver = R.pathOr('', ['receiver'], payload);
    this.newDtag = R.pathOr('', ['newDtag'], payload);
  }

  static fromJson(json: object): MsgDtagAcceptTransfer {
    return {
      category: 'profiles',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      receiver: R.pathOr('', ['receiver'], json),
      newDtag: R.pathOr('', ['new_dtag'], json),
    };
  }
}

export default MsgDtagAcceptTransfer;
