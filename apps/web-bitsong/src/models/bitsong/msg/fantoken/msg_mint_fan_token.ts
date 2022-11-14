import { Categories } from '../types';

class MsgMintFanToken {
  public category: Categories;
  public type: string;
  public json: any;
  public recipient: string;

  constructor(payload: any) {
    this.category = 'fantoken';
    this.type = payload.type;
    this.json = payload.json;
    this.recipient = payload.recipient;
  }

  static fromJson(json: any): MsgMintFanToken {
    return {
      category: 'fantoken',
      json,
      type: json['@type'],
      recipient: json.recipient,
    };
  }
}

export default MsgMintFanToken;
