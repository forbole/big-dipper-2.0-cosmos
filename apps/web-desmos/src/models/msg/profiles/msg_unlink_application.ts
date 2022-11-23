import type { Categories } from '@/models/msg/types';

class MsgUnlinkApplication {
  public category: Categories;

  public type: string;

  public json: any;

  public application: string;

  public username: string;

  public signer: string;

  constructor(payload: any) {
    this.category = 'profiles';
    this.type = payload.type;
    this.json = payload.json;
    this.application = payload.application;
    this.username = payload.username;
    this.signer = payload.signer;
  }

  static fromJson(json: any): MsgUnlinkApplication {
    return {
      category: 'profiles',
      json,
      type: json['@type'],
      application: json.application,
      username: json.username,
      signer: json.signer,
    };
  }
}

export default MsgUnlinkApplication;
