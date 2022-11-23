import type { Categories } from '@/models/msg/types';

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

  static fromJson(json: any): MsgUpdateGroupAccountAdminRequest {
    return {
      category: 'group',
      json,
      type: json['@type'],
      admin: json.admin,
      newAdmin: json.new_admin,
    };
  }
}

export default MsgUpdateGroupAccountAdminRequest;
