import type { Categories } from '@/models/msg/types';

class MsgUnknown {
  public category: Categories;

  public type: string;

  public json: JSON;

  constructor(payload: any) {
    this.category = 'others';
    this.type = payload.type;
    this.json = payload.json;
  }

  static fromJson(json: any): MsgUnknown {
    return {
      category: 'others',
      type: json['@type'] ?? '',
      json,
    };
  }
}

export default MsgUnknown;
