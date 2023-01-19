import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgDelegate {
  public category: Categories;

  public type: string;

  public delegatorAddress: string;

  public validatorAddress: string;

  public amount: MsgCoin;

  public json: object;

  constructor(payload: object) {
    this.category = 'staking';
    this.type = R.pathOr('', ['type'], payload);
    this.delegatorAddress = R.pathOr('', ['delegatorAddress'], payload);
    this.validatorAddress = R.pathOr('', ['validatorAddress'], payload);
    this.amount = {
      denom: R.pathOr('', ['amount', 'denom'], ''),
      amount: R.pathOr('0', ['amount', 'amount'], '0'),
    };
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgDelegate {
    return {
      category: 'staking',
      json,
      type: R.pathOr('', ['@type'], json),
      delegatorAddress: R.pathOr('', ['delegator_address'], json),
      validatorAddress: R.pathOr('', ['validator_address'], json),
      amount: {
        denom: R.pathOr('', ['amount', 'denom'], json),
        amount: R.pathOr('0', ['amount', 'amount'], json),
      },
    };
  }
}

export default MsgDelegate;
