import { Categories } from './types';

class MsgUnknown {
  public category: Categories;
  public type: string;
  public data: JSON;

  constructor(payload: any) {
    this.category = 'others';
    this.type = payload.type;
    this.data = payload.data;
  }

  static fromJson(json: any) {
    return new MsgUnknown({
      type: json['@type'] ?? '',
      data: json,
    });
  }
}

export default MsgUnknown;
