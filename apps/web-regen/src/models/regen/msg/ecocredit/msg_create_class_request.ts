import type { Categories } from '../types';

class MsgCreateClassRequest {
  public category: Categories;

  public type: string;

  public json: any;

  public designer: string;

  constructor(payload: any) {
    this.category = 'ecocredit';
    this.json = payload.json;
    this.type = payload.type;
    this.designer = payload.designer;
  }

  static fromJson(json: any): MsgCreateClassRequest {
    return {
      category: 'ecocredit',
      json,
      type: json['@type'],
      designer: json.designer,
    };
  }
}

export default MsgCreateClassRequest;
