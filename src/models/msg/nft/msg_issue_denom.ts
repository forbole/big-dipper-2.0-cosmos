import * as R from 'ramda';
import { Categories } from '../types';

class MsgIssueDenom {
  public category: Categories;
  public type: string;
  public json: any;
  public id: string;
  public name: string;
  public creators: string[];
  public splitShares: MsgCoin;
  public royaltyShare: MsgCoin;
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
      splitShares: {
        denom: R.pathOr('', ['source', 'denom'], json),
        amount: R.pathOr('', ['source', 'amount'], json),
      },
      royaltyShare: {
        denom: R.pathOr('', ['source', 'denom'], json),
        amount: R.pathOr(0, ['source', 'amount'], json),
      },
      sender: json.sender,
    });
  }
}

export default MsgIssueDenom;
