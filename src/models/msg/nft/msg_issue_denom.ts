import * as R from 'ramda';
import { Categories } from '../types';

class MsgIssueDenom {
  public category: Categories;
  public type: string;
  public json: any;
  public creators: string[];
  public splitShares: string[];
  public royaltyShare: string;

  constructor(payload: any) {
    this.category = 'nft';
    this.type = payload.type;
    this.json = payload.json;
    this.creators = payload.creators;
    this.splitShares = payload.split_shares;
    this.royaltyShare = payload.royalty_share;
  }

  static fromJson(json: any) {
    return new MsgIssueDenom({
      json,
      type: json['@type'],
      creators: R.pathOr([], ['creators'], json),
      splitShares: R.pathOr([], ['splitShares'], json),
      royaltyShare: json.royaltyShare,
    });
  }
}

export default MsgIssueDenom;
