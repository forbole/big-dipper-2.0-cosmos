import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgSetWithdrawAddress {
  public category: Categories;

  public type: string;

  public delegatorAddress: string;

  public withdrawalAddress: string;

  public json: object;

  constructor(payload: object) {
    this.json = R.pathOr({}, ['json'], payload);
    this.category = 'distribution';
    this.type = R.pathOr('', ['type'], payload);
    this.delegatorAddress = R.pathOr('', ['delegatorAddress'], payload);
    this.withdrawalAddress = R.pathOr('', ['withdrawalAddress'], payload);
  }

  static fromJson(json: object): MsgSetWithdrawAddress {
    return {
      category: 'distribution',
      json,
      type: R.pathOr('', ['@type'], json),
      delegatorAddress: R.pathOr('', ['delegator_address'], json),
      withdrawalAddress: R.pathOr('', ['withdraw_address'], json),
    };
  }
}

export default MsgSetWithdrawAddress;
