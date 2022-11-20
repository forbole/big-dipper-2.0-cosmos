import type { Categories } from '../types';

class MsgSaveProfile {
  public category: Categories;

  public type: string;

  public json: any;

  public creator: string;

  constructor(payload: any) {
    this.category = 'profiles';
    this.type = payload.type;
    this.creator = payload.creator;
    this.json = payload.json;
  }

  static fromJson(json: any): MsgSaveProfile {
    return {
      category: 'profiles',
      type: json['@type'],
      creator: json.creator,
      json,
    };
  }
}

export default MsgSaveProfile;
