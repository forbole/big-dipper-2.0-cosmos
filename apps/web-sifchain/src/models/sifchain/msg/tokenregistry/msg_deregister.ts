import type { Categories } from '../types';

class MsgDeregister {
  public category: Categories;

  public type: string;

  public json: any;

  public from: string;

  public denom: string;

  constructor(payload: any) {
    this.category = 'tokenregistry';
    this.type = payload.type;
    this.json = payload.json;
    this.from = payload.from;
    this.denom = payload.denom;
  }

  static fromJson(json: any): MsgDeregister {
    return {
      category: 'tokenregistry',
      json,
      type: json['@type'],
      from: json.from,
      denom: json.denom,
    };
  }
}

export default MsgDeregister;
