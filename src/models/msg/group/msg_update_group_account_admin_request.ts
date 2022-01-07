import { Categories } from '../types';

class MsgUpdateGroupAccountAdminRequest {
  public category: Categories;
  public type: string;
  public json: any;
  public admin: string;
  public newAdmin: string;

  constructor(payload: any) {
    this.category = 'group';
    this.json = payload.json;
    this.type = payload.type;
    this.admin = payload.admin;
    this.newAdmin = payload.newAdmin;
  }

  static fromJson(json: any) {
    return new MsgUpdateGroupAccountAdminRequest({
      json,
      type: json['@type'],
      admin: json.admin,
      newAdmin: json.newAdmin,
    });
  }
}

export default MsgUpdateGroupAccountAdminRequest;
