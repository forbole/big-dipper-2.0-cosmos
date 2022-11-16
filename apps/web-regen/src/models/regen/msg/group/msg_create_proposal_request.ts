import type { Categories } from '../types';

class MsgCreateProposalRequest {
  public category: Categories;
  public type: string;
  public json: any;
  public address: string;

  constructor(payload: any) {
    this.category = 'group';
    this.json = payload.json;
    this.type = payload.type;
    this.address = payload.address;
  }

  static fromJson(json: any): MsgCreateProposalRequest {
    return {
      category: 'group',
      json,
      type: json['@type'],
      address: json.address,
    };
  }
}

export default MsgCreateProposalRequest;
