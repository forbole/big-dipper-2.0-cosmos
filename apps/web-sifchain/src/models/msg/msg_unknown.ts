import { Categories } from './types';

class MsgUnknown {
  public category: Categories;
  public type: string;
  public json: JSON;

  constructor(payload: any) {
    this.category = 'others';
    this.type = payload.type;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgUnknown({
      type: json['@type'] ?? '',
      json,
    });
  }
}

export default MsgUnknown;
