import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgTransferNFT {
  public category: Categories;

  public type: string;

  public json: object;

  public sender: string;

  public id: string;

  public recipient: string;

  constructor(payload: object) {
    this.category = 'nft';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.id = R.pathOr('', ['id'], payload);
    this.recipient = R.pathOr('', ['recipient'], payload);
  }

  static fromJson(json: object): MsgTransferNFT {
    return {
      category: 'nft',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      id: R.pathOr('', ['id'], json),
      recipient: R.pathOr('', ['recipient'], json),
    };
  }
}

export default MsgTransferNFT;
