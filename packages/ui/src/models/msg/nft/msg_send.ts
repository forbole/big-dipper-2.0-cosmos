import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgNftSend {
  public category: Categories;
  public type: string;
  public json: object;
  public class_id: string;
  public id: string;
  public sender: string;
  public receiver: string;

  constructor(payload: object) {
    this.category = 'nft';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.class_id = R.pathOr('', ['class_id'], payload);
    this.id = R.pathOr('', ['id'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.receiver = R.pathOr('', ['receiver'], payload);
  }

  static fromJson(json: object): MsgNftSend {
    return {
      category: 'nft',
      json,
      type: R.pathOr('', ['@type'], json),
      class_id: R.pathOr('', ['class_id'], json),
      id: R.pathOr('', ['id'], json),
      sender: R.pathOr('', ['sender'], json),
      receiver: R.pathOr('', ['receiver'], json),
    };
  }
}

export default MsgNftSend;
