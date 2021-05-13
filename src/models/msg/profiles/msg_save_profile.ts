import { Categories } from '../types';

class MsgSaveProfiles {
  public category: Categories;
  public type: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'profiles';
    this.type = payload.type;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSaveProfiles({
      type: json['@type'],
      json,
    });
  }
}

export default MsgSaveProfiles;
