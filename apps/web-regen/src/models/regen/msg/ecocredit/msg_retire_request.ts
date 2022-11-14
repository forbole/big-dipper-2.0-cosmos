import { Categories } from '../types';

class MsgRetireRequest {
  public category: Categories;
  public type: string;
  public json: any;
  public holder: string;

  constructor(payload: any) {
    this.category = 'ecocredit';
    this.json = payload.json;
    this.type = payload.type;
    this.holder = payload.holder;
  }

  static fromJson(json: any): MsgRetireRequest {
    return {
      category: 'ecocredit',
      json,
      type: json['@type'],
      holder: json.holder,
    };
  }
}

export default MsgRetireRequest;
