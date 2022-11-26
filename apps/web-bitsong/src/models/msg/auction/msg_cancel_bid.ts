import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCancelBid {
  public category: Categories;

  public type: string;

  public json: object;

  public auctionId: number;

  public bidder: string;

  constructor(payload: object) {
    this.category = 'auction';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.auctionId = R.pathOr(0, ['auctionId'], payload);
    this.bidder = R.pathOr('', ['bidder'], payload);
  }

  static fromJson(json: object): MsgCancelBid {
    return {
      category: 'auction',
      json,
      type: R.pathOr('', ['@type'], json),
      auctionId: R.pathOr(0, ['auction_id'], json),
      bidder: R.pathOr('', ['bidder'], json),
    };
  }
}

export default MsgCancelBid;
