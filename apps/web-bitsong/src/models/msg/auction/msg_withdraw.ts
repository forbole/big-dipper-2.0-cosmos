import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgWithdraw {
  public category: Categories;

  public type: string;

  public json: object;

  public recipient: string;

  public auctionId: number;

  constructor(payload: object) {
    this.category = 'auction';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.recipient = R.pathOr('', ['recipient'], payload);
    this.auctionId = R.pathOr(0, ['auctionId'], payload);
  }

  static fromJson(json: object): MsgWithdraw {
    return {
      category: 'auction',
      json,
      type: R.pathOr('', ['@type'], json),
      recipient: R.pathOr('', ['recipient'], json),
      auctionId: R.pathOr(0, ['auction_id'], json),
    };
  }
}

export default MsgWithdraw;
