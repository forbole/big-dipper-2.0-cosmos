import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgSendRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public sender: string;

  public recipient: string;

  constructor(payload: object) {
    this.category = 'ecocredit';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.recipient = R.pathOr('', ['recipient'], payload);
  }

  static fromJson(json: object): MsgSendRequest {
    return {
      category: 'ecocredit',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      recipient: R.pathOr('', ['recipient'], json),
    };
  }
}

export default MsgSendRequest;
