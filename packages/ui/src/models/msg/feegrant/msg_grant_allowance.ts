import type { Categories } from '../types';

class MsgGrantAllowance {
  public category: Categories;

  public type: string;

  public json: any;

  public granter: string;

  public grantee: string;

  constructor(payload: any) {
    this.category = 'feegrant';
    this.type = payload.type;
    this.json = payload.json;
    this.granter = payload.granter;
    this.grantee = payload.grantee;
  }

  static fromJson(json: any): MsgGrantAllowance {
    return {
      category: 'feegrant',
      json,
      type: json['@type'],
      granter: json.granter,
      grantee: json.grantee,
    };
  }
}

export default MsgGrantAllowance;
