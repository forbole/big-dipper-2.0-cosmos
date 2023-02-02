import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgFundCommunityPool {
  public category: Categories;

  public type: string;

  public depositor: string;

  public amount: MsgCoin[];

  public json: object;

  constructor(payload: object) {
    this.category = 'distribution';
    this.type = R.pathOr('', ['type'], payload);
    this.depositor = R.pathOr('', ['depositor'], payload);
    this.amount = R.pathOr([], ['amount'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgFundCommunityPool {
    return {
      category: 'distribution',
      json,
      type: R.pathOr('', ['@type'], json),
      depositor: R.pathOr('', ['depositor'], json),
      amount: R.pathOr([], ['amount'], json).map((x) => ({
        denom: R.pathOr('', ['denom'], x),
        amount: R.pathOr('0', ['amount'], x),
      })),
    };
  }
}

export default MsgFundCommunityPool;
