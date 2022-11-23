import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgWithdraw {
  public category: Categories;

  public type: string;

  public json: any;

  public recipient: string;

  public auctionId: number;

  constructor(payload: any) {
    this.category = 'auction';
    this.type = payload.type;
    this.json = payload.json;
    this.recipient = payload.recipient;
    this.auctionId = payload.auctionId;
  }

  static fromJson(json: any): MsgWithdraw {
    return {
      category: 'auction',
      json,
      type: json['@type'],
      recipient: json.recipient,
      auctionId: R.pathOr(0, ['auction_id'], json),
    };
  }
}

export default MsgWithdraw;
