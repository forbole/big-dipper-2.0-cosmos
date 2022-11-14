import { Categories } from '../types';

class MsgAnchorDataRequest {
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

  static fromJson(json: any): MsgAnchorDataRequest {
    return {
      category: 'data',
      json,
      type: json['@type'],
      sender: json.sender,
    };
  }
}

export default MsgAnchorDataRequest;
