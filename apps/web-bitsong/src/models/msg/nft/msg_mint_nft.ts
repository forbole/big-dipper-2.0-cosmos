import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgMintNFT {
  public category: Categories;

  public type: string;

  public json: object;

  public sender: string;

  public id: string;

  constructor(payload: object) {
    this.category = 'nft';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.id = R.pathOr('', ['id'], payload);
  }

  static fromJson(json: object): MsgMintNFT {
    return {
      category: 'nft',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      id: R.pathOr('', ['id'], json),
    };
  }
}

export default MsgMintNFT;
