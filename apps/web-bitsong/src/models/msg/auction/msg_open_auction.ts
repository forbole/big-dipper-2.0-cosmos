import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgOpenAuction {
  public category: Categories;

  public type: string;

  public json: object;

  public owner: string;

  public nftId: string;

  constructor(payload: object) {
    this.category = 'auction';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.owner = R.pathOr('', ['owner'], payload);
    this.nftId = R.pathOr('', ['nftId'], payload);
  }

  static fromJson(json: object): MsgOpenAuction {
    return {
      category: 'auction',
      json,
      type: R.pathOr('', ['@type'], json),
      owner: R.pathOr('', ['owner'], json),
      nftId: R.pathOr('', ['nft_id'], json),
    };
  }
}

export default MsgOpenAuction;
