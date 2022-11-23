import type { Categories } from '@/models/msg/types';

class MsgActivate {
  public category: Categories;

  public type: string;

  public json: any;

  public validator: string;

  constructor(payload: any) {
    this.category = 'oracle';
    this.json = payload.json;
    this.type = payload.type;
    this.validator = payload.validator;
  }

  static fromJson(json: any): MsgActivate {
    return {
      category: 'oracle',
      json,
      type: json['@type'],
      validator: json.validator,
    };
  }
}

export default MsgActivate;
