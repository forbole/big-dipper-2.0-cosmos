import { Categories } from '../types';

class MsgCreateGroupAccountRequest {
  public category: Categories;
  public type: string;
  public json: any;
  public admin: string;

  constructor(payload: any) {
    this.category = 'ecocredit';
    this.json = payload.json;
    this.type = payload.type;
    this.admin = payload.admin;
  }

  static fromJson(json: any) {
    return new MsgCreateGroupAccountRequest({
      json,
      type: json['@type'],
      admin: json.admin,
    });
  }
}

export default MsgCreateGroupAccountRequest;
