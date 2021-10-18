import * as R from 'ramda';
import { Categories } from '../types';

class MsgIssueDenom {
  public category: Categories;
  public type: string;
  public json: any;
  public id: string;
  public name: string;
  public creators: string[];
  public splitShares: string[];
  public royaltyShare: string;
  public sender: string;

  constructor(payload: any) {
    this.category = 'nft';
    this.type = payload.type;
    this.json = payload.json;
    this.id = payload.id;
    this.name = payload.name;
    this.creators = payload.creators;
    this.splitShares = payload.split_shares;
    this.royaltyShare = payload.royalty_share;
    this.sender = payload.sender;
  }

  static fromJson(json: any) {
    return new MsgIssueDenom({
      json,
      type: json['@type'],
      id: json.id,
      name: json.name,
      creators: R.pathOr([], ['creators'], json),
      splitShares: R.pathOr([], ['splitShares'], json),
      royaltyShare: json.royaltyShare,
      sender: json.sender,
    });
  }
}

export default MsgIssueDenom;
