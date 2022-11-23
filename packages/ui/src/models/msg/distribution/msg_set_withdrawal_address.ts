import type { Categories } from '@/models/msg/types';

class MsgSetWithdrawAddress {
  public category: Categories;

  public type: string;

  public delegatorAddress: string;

  public withdrawalAddress: string;

  public json: any;

  constructor(payload: any) {
    this.json = payload.json;
    this.category = 'distribution';
    this.type = payload.type;
    this.delegatorAddress = payload.delegatorAddress;
    this.withdrawalAddress = payload.withdrawalAddress;
  }

  static fromJson(json: any): MsgSetWithdrawAddress {
    return {
      category: 'distribution',
      json,
      type: json['@type'],
      delegatorAddress: json.delegator_address,
      withdrawalAddress: json.withdraw_address,
    };
  }
}

export default MsgSetWithdrawAddress;
