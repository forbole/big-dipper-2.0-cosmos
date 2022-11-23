import type { Categories } from '@/models/msg/types';

class MsgUndelegate {
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

  static fromJson(json: any): MsgUndelegate {
    return {
      category: 'staking',
      json,
      type: json['@type'],
      delegatorAddress: json?.delegator_address,
      validatorAddress: json?.validator_address,
      amount: {
        denom: json?.amount?.denom,
        amount: json?.amount?.amount ?? '0',
      },
    };
  }
}

export default MsgUndelegate;
