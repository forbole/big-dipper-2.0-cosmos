import type { Categories } from '@/models/msg/types';

class MsgDeleteProfile {
  public category: Categories;

  public type: string;

  public creator: string;

  public json: any;

  constructor(payload: any) {
    this.category = 'profiles';
    this.type = payload.type;
    this.creator = payload.creator;
    this.json = payload.json;
  }

  static fromJson(json: any): MsgDeleteProfile {
    return {
      category: 'profiles',
      type: json['@type'],
      creator: json.creator,
      json,
    };
  }
}

export default MsgDeleteProfile;
