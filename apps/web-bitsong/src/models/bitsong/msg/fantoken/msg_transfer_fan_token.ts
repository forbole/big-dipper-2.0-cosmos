import * as R from 'ramda';
import { Categories } from '../types';

class MsgTransferFanTokenOwner {
  public category: Categories;
  public type: string;
  public json: any;
  public symbol: string;
  public srcOwner: string;
  public dstOwner: string;

  constructor(payload: any) {
    this.category = 'fantoken';
    this.type = payload.type;
    this.json = payload.json;
    this.symbol = payload.symbol;
    this.srcOwner = payload.srcOwner;
    this.dstOwner = payload.dstOwner;
  }

  static fromJson(json: any): MsgTransferFanTokenOwner {
    return {
      category: 'fantoken',
      json,
      type: json['@type'],
      symbol: json.symbol,
      srcOwner: R.pathOr('', ['src_owner'], json),
      dstOwner: R.pathOr('', ['dst_owner'], json),
    }
  }
}

export default MsgTransferFanTokenOwner;
