import type { Categories } from '../types';

class MsgSendRequest {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;
  public recipient: string;

  constructor(payload: any) {
    this.category = 'ecocredit';
    this.json = payload.json;
    this.type = payload.type;
    this.sender = payload.sender;
    this.recipient = payload.recipient;
  }

  static fromJson(json: any): MsgSendRequest {
    return {
      category: 'ecocredit',
      json,
      type: json['@type'],
      sender: json.sender,
      recipient: json.recipient,
    };
  }
}

export default MsgSendRequest;
