import type { Categories } from '../types';

class MsgBlockUser {
  public category: Categories;

  public type: string;

  public json: any;

  public reason?: string;

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

  static fromJson(json: any): MsgBlockUser {
    return {
      category: 'profiles',
      json,
      type: json['@type'],
      blocked: json.blocked,
      blocker: json.blocker,
      subspace: json.subspace,
    };
  }
}

export default MsgBlockUser;
