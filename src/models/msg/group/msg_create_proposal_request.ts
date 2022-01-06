import { Categories } from '../types';

class MsgCreateProposalRequest {
  public category: Categories;
  public type: string;
  public json: any;
  public address: string;

  constructor(payload: any) {
    this.category = 'ecocredit';
    this.json = payload.json;
    this.type = payload.type;
    this.address = payload.address;
  }

  static fromJson(json: any) {
    return new MsgCreateProposalRequest({
      json,
      type: json['@type'],
      address: json.address,
    });
  }
}

export default MsgCreateProposalRequest;
