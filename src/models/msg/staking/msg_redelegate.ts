import * as R from 'ramda';
import { Categories } from '../types';

class MsgRedelegate {
  public category: Categories;
  public type: string;
  public delegatorAddress: string;
  public validatorSrcAddress: string;
  public validatorDstAddress: string;
  public amount: MsgCoin
  public json: any;

  constructor(payload: any) {
    this.category = 'staking';
    this.type = payload.type;
    this.delegatorAddress = payload.delegatorAddress;
    this.validatorDstAddress = payload.validatorDstAddress;
    this.validatorSrcAddress = payload.validatorSrcAddress;
    this.amount = payload.amount;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgRedelegate({
      json,
      type: json['@type'],
      delegatorAddress: json?.delegator_address,
      validatorSrcAddress: json?.validator_src_address,
      validatorDstAddress: json?.validator_dst_address,
      amount: {
        denom: json?.amount?.denom,
        amount: R.pathOr('0', ['amount', 'amount'], json),
      },
    });
  }
}

export default MsgRedelegate;
