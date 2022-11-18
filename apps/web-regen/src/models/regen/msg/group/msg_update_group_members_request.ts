import type { Categories } from '../types';

class MsgUpdateGroupMembersRequest {
  public category: Categories;
  public type: string;
  public json: any;
  public admin: string;

  constructor(payload: any) {
    this.category = 'group';
    this.json = payload.json;
    this.type = payload.type;
    this.admin = payload.admin;
  }

  static fromJson(json: any): MsgUpdateGroupMembersRequest {
    return {
      category: 'group',
      json,
      type: json['@type'],
      admin: json.admin,
    };
  }
}

export default MsgUpdateGroupMembersRequest;