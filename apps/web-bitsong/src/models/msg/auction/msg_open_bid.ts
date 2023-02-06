import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgOpenBid {
  public category: Categories;

  public type: string;

  public json: object;

  public auctionId: number;

  public bidder: string;

  public bidAmount: MsgCoin;

  constructor(payload: object) {
    this.category = 'auction';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.auctionId = R.pathOr(0, ['auctionId'], payload);
    this.bidder = R.pathOr('', ['bidder'], payload);
    this.bidAmount = R.pathOr({ denom: '', amount: '0' }, ['bidAmount'], payload);
  }

  static fromJson(json: object): MsgOpenBid {
    return {
      category: 'auction',
      json,
      type: R.pathOr('', ['@type'], json),
      auctionId: R.pathOr(0, ['auction_id'], json),
      bidder: R.pathOr('', ['bidder'], json),
      bidAmount: R.pathOr({ denom: '', amount: '0' }, ['bid_amount', 'denom'], json),
    };
  }
}

export default MsgOpenBid;
