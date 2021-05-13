import numeral from 'numeral';
import { Categories } from '../types';

class MsgUndelegate {
  public category: Categories;
  public type: string;
  public delegatorAddress: string;
  public validatorAddress: string;
  public amount: {
    denom: string;
    amount: string | number;
  }
  public json: any;

  constructor(payload: any) {
    this.category = 'staking';
    this.type = payload.type;
    this.delegatorAddress = payload.delegatorAddress;
    this.validatorAddress = payload.validatorAddress;
    this.amount = payload.amount;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgUndelegate({
      json,
      type: json['@type'],
      delegatorAddress: json?.delegator_address,
      validatorAddress: json?.validator_address,
      amount: {
        denom: json?.amount?.denom,
        amount: numeral(json?.amount?.amount).value(),
      },
    });
  }
}

export default MsgUndelegate;
