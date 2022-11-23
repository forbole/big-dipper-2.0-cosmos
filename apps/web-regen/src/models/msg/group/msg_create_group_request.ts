import type { Categories } from '@/models/msg/types';

class MsgCreateGroupRequest {
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

  static fromJson(json: any): MsgCreateGroupRequest {
    return {
      category: 'group',
      json,
      type: json['@type'],
      admin: json.admin,
    };
  }
}

export default MsgCreateGroupRequest;
