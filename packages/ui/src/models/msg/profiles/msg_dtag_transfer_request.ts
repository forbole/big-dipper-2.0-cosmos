import type { Categories } from '@/models/msg/types';

class MsgDtagTransferRequest {
  public category: Categories;

  public type: string;

  public json: any;

  public sender: string;

  public receiver: string;

  constructor(payload: any) {
    this.category = 'profiles';
    this.type = payload.type;
    this.json = payload.json;
    this.sender = payload.sender;
    this.receiver = payload.receiver;
  }

  static fromJson(json: any): MsgDtagTransferRequest {
    return {
      category: 'profiles',
      json,
      type: json['@type'],
      sender: json.sender,
      receiver: json.receiver,
    };
  }
}

export default MsgDtagTransferRequest;
