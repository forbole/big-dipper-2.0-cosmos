import type { Categories } from '@/models/msg/types';

class MsgStoreRawDataRequest {
  public category: Categories;

  public type: string;

  public json: any;

  public sender: string;

  constructor(payload: any) {
    this.category = 'data';
    this.json = payload.json;
    this.type = payload.type;
    this.sender = payload.sender;
  }

  static fromJson(json: any): MsgStoreRawDataRequest {
    return {
      category: 'data',
      json,
      type: json['@type'],
      sender: json.sender,
    };
  }
}

export default MsgStoreRawDataRequest;
