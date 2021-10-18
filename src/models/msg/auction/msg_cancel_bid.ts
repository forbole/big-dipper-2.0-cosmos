import * as R from 'ramda';
import { Categories } from '../types';

class MsgCancelBid {
  public category: Categories;
  public type: string;
  public json: any;
  public auctionId: number;
  public bidder: string;

  constructor(payload: any) {
    this.category = 'auction';
    this.type = payload.type;
    this.json = payload.json;
    this.auctionId = payload.auctionId;
    this.bidder = payload.bidder;
  }

  static fromJson(json: any) {
    return new MsgCancelBid({
      json,
      type: json['@type'],
      auctionId: R.pathOr(0, ['auction_id'], json),
      bidder: json.bidder,
    });
  }
}

export default MsgCancelBid;
