import * as R from 'ramda';
import { Categories } from '../types';

class MsgDelegate {
  public category: Categories;
  public type: string;
  public delegatorAddress: string;
  public validatorAddress: string;
  public amount: MsgCoin;
  public json: any;

  constructor(payload: any) {
    this.category = 'staking';
    this.type = payload.type;
    this.delegatorAddress = payload.delegatorAddress;
    this.validatorAddress = payload.validatorAddress;
    this.amount = payload.amount;
    this.json = payload.json;
  }

  static fromJson(json: any): MsgDelegate {
    return {
      category: 'staking',
      json,
      type: json['@type'],
      delegatorAddress: json?.delegator_address,
      validatorAddress: json?.validator_address,
      amount: {
        denom: json?.amount?.denom,
        amount: R.pathOr('0', ['amount', 'amount'], json),
      },
    };
  }
}

export default MsgDelegate;
