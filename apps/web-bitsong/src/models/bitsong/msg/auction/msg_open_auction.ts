import * as R from 'ramda';
import type { Categories } from '../types';

class MsgOpenAuction {
  public category: Categories;

  public type: string;

  public json: any;

  public owner: string;

  public nftId: string;

  constructor(payload: any) {
    this.category = 'auction';
    this.type = payload.type;
    this.json = payload.json;
    this.owner = payload.owner;
    this.nftId = payload.nftId;
  }

  static fromJson(json: any): MsgOpenAuction {
    return {
      category: 'auction',
      json,
      type: json['@type'],
      owner: json.owner,
      nftId: R.pathOr('', ['nft_id'], json),
    };
  }
}

export default MsgOpenAuction;
