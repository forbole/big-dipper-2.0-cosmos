import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgCreatePeriodicVestingAccount {
  public category: Categories;

  public type: string;

  public json: object;

  public fromAddress: string;

  public toAddress: string;

  constructor(payload: object) {
    this.category = 'vesting';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.fromAddress = R.pathOr('', ['fromAddress'], payload);
    this.toAddress = R.pathOr('', ['toAddress'], payload);
  }

  static fromJson(json: object): MsgCreatePeriodicVestingAccount {
    return {
      category: 'vesting',
      json,
      type: R.pathOr('', ['@type'], json),
      fromAddress: R.pathOr('', ['fromAddress'], json),
      toAddress: R.pathOr('', ['toAddress'], json),
    };
  }
}

export default MsgCreatePeriodicVestingAccount;
