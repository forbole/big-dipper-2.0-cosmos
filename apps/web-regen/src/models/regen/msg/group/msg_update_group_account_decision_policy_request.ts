import type { Categories } from '../types';

class MsgUpdateGroupAccountDecisionPolicyRequest {
  public category: Categories;

  public type: string;

  public json: any;

  public admin: string;

  public address: string;

  constructor(payload: any) {
    this.category = 'group';
    this.json = payload.json;
    this.type = payload.type;
    this.admin = payload.admin;
    this.address = payload.address;
  }

  static fromJson(json: any): MsgUpdateGroupAccountDecisionPolicyRequest {
    return {
      category: 'group',
      json,
      type: json['@type'],
      admin: json.admin,
      address: json.address,
    };
  }
}

export default MsgUpdateGroupAccountDecisionPolicyRequest;
