import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgClawback {
  public category: Categories;

  public type: string;

  public json: object;

  public accountAddress: string;

  public destAddress: string;

  constructor(payload: object) {
    this.category = 'vesting';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.accountAddress = R.pathOr('', ['accountAddress'], payload);
    this.destAddress = R.pathOr('', ['destAddress'], payload);
  }

  static fromJson(json: object): MsgClawback {
    return {
      category: 'vesting',
      json,
      type: R.pathOr('', ['@type'], json),
      accountAddress: R.pathOr('', ['account_address'], json),
      destAddress: R.pathOr('', ['dest_address'], json),
    };
  }
}

export default MsgClawback;
