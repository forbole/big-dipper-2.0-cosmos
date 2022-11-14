import { Categories } from '../types';

class MsgChannelCloseInit {
  public category: Categories;
  public type: string;
  public signer: string;
  public channelId: string;
  public portId: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'ibc';
    this.type = payload.type;
    this.signer = payload.signer;
    this.channelId = payload.channelId;
    this.portId = payload.portId;
    this.json = payload.json;
  }

  static fromJson(json: any): MsgChannelCloseInit {
    return {
      category: 'ibc',
      json,
      type: json['@type'],
      signer: json.signer,
      channelId: json.channel_id,
      portId: json.port_id,
    };
  }
}

export default MsgChannelCloseInit;
