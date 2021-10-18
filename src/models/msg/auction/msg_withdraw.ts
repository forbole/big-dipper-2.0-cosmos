import * as R from 'ramda';
import { Categories } from '../types';

class MsgWithdraw {
  public category: Categories;
  public type: string;
  public json: any;
  public recipient: string;
  public auctionId: string;

  constructor(payload: any) {
    this.category = 'auction';
    this.type = payload.type;
    this.json = payload.json;
    this.recipient = payload.recipient;
    this.auctionId = payload.auctionId;
  }

  static fromJson(json: any) {
    return new MsgWithdraw({
      json,
      type: json['@type'],
      recipient: json.recipient,
      auctionId: R.pathOr(0, ['auction_id'], json),
    });
  }
}

export default MsgWithdraw;
