import type { Categories } from '@/models/msg/types';

class MsgEditFanToken {
  public category: Categories;

  public type: string;

  public json: any;

  public owner: string;

  constructor(payload: any) {
    this.category = 'fantoken';
    this.type = payload.type;
    this.json = payload.json;
    this.owner = payload.owner;
  }

  static fromJson(json: any): MsgEditFanToken {
    return {
      category: 'fantoken',
      json,
      type: json['@type'],
      owner: json.owner,
    };
  }
}

export default MsgEditFanToken;
