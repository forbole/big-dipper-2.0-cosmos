import { Categories } from '../types';

class MsgRevoke {
  public category: Categories;
  public type: string;
  public json: any;
  public granter: string;
  public grantee: string;

  constructor(payload: any) {
    this.category = 'authz';
    this.type = payload.type;
    this.json = payload.json;
    this.granter = payload.granter;
    this.grantee = payload.grantee;
  }

  static fromJson(json: any) {
    return new MsgRevoke({
      json,
      type: json['@type'],
      granter: json.granter,
      grantee: json.grantee,
    });
  }
}

export default MsgRevoke;
