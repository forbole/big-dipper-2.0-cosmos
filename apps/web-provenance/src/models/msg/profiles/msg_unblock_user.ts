import { Categories } from '../types';

class MsgUnblockUser {
  public category: Categories;
  public type: string;
  public json: any;
  public reason: string;
  public blocked: string;
  public blocker: string;
  public subspace: string;

  constructor(payload: any) {
    this.category = 'profiles';
    this.type = payload.type;
    this.json = payload.json;
    this.blocked = payload.blocked;
    this.blocker = payload.blocker;
    this.subspace = payload.subspace;
  }

  static fromJson(json: any) {
    return new MsgUnblockUser({
      json,
      type: json['@type'],
      blocked: json.blocked,
      blocker: json.blocker,
      subspace: json.subspace,
    });
  }
}

export default MsgUnblockUser;
