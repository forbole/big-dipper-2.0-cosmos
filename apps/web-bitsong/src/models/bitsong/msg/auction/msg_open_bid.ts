import * as R from 'ramda';
import type { Categories } from '../types';

class MsgOpenBid {
  public category: Categories;
  public type: string;
  public json: any;
  public auctionId: number;
  public bidder: string;
  public bidAmount: MsgCoin;

  constructor(payload: any) {
    this.category = 'auction';
    this.type = payload.type;
    this.json = payload.json;
    this.auctionId = payload.auctionId;
    this.bidder = payload.bidder;
    this.bidAmount = payload.bidAmount;
  }

  static fromJson(json: any): MsgOpenBid {
    return {
      category: 'auction',
      json,
      type: json['@type'],
      auctionId: R.pathOr(0, ['auction_id'], json),
      bidder: json.bidder,
      bidAmount: {
        denom: R.pathOr('', ['bid_amount', 'denom'], json),
        amount: R.pathOr('0', ['bid_amount', 'amount'], json),
      },
    };
  }
}

export default MsgOpenBid;
