import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgRedelegate {
  public category: Categories;

  public type: string;

  public delegatorAddress: string;

  public validatorSrcAddress: string;

  public validatorDstAddress: string;

  public amount: MsgCoin;

  public json: object;

  constructor(payload: object) {
    this.category = 'staking';
    this.type = R.pathOr('', ['type'], payload);
    this.delegatorAddress = R.pathOr('', ['delegatorAddress'], payload);
    this.validatorDstAddress = R.pathOr('', ['validatorDstAddress'], payload);
    this.validatorSrcAddress = R.pathOr('', ['validatorSrcAddress'], payload);
    this.amount = R.pathOr({ denom: '', amount: '0' }, ['amount'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgRedelegate {
    return {
      category: 'staking',
      json,
      type: R.pathOr('', ['@type'], json),
      delegatorAddress: R.pathOr('', ['delegator_address'], json),
      validatorSrcAddress: R.pathOr('', ['validator_src_address'], json),
      validatorDstAddress: R.pathOr('', ['validator_dst_address'], json),
      amount: {
        denom: R.pathOr('', ['amount', 'denom'], json),
        amount: R.pathOr('0', ['amount', 'amount'], json),
      },
    };
  }
}

export default MsgRedelegate;
