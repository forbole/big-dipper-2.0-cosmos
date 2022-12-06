import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgDecommissionPool {
  public category: Categories;

  public type: string;

  public json: object;

  public signer: string;

  public symbol: string;

  constructor(payload: object) {
    this.category = 'clp';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.symbol = R.pathOr('', ['symbol'], payload);
  }

  static fromJson(json: object): MsgDecommissionPool {
    return {
      category: 'clp',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      symbol: R.pathOr('', ['symbol'], json),
    };
  }
}

export default MsgDecommissionPool;
