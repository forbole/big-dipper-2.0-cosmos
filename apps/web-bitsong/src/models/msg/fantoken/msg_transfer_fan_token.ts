import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgTransferFanTokenOwner {
  public category: Categories;

  public type: string;

  public json: object;

  public symbol: string;

  public srcOwner: string;

  public dstOwner: string;

  constructor(payload: object) {
    this.category = 'fantoken';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.symbol = R.pathOr('', ['symbol'], payload);
    this.srcOwner = R.pathOr('', ['srcOwner'], payload);
    this.dstOwner = R.pathOr('', ['dstOwner'], payload);
  }

  static fromJson(json: object): MsgTransferFanTokenOwner {
    return {
      category: 'fantoken',
      json,
      type: R.pathOr('', ['@type'], json),
      symbol: R.pathOr('', ['symbol'], json),
      srcOwner: R.pathOr('', ['src_owner'], json),
      dstOwner: R.pathOr('', ['dst_owner'], json),
    };
  }
}

export default MsgTransferFanTokenOwner;
