import { Categories } from '../types';

class MsgBurnFanToken {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;

  constructor(payload: any) {
    this.category = 'fantoken';
    this.type = payload.type;
    this.json = payload.json;
    this.sender = payload.sender;
  }

  static fromJson(json: any): MsgBurnFanToken {
    return {
      category: 'fantoken',
      json,
      type: json['@type'],
      sender: json.sender,
    };
  }
}

export default MsgBurnFanToken;
