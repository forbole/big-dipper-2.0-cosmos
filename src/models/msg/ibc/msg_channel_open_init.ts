import { Categories } from '../types';

class MsgChannelOpenInit {
    public category: Categories;
    public type: string;
    public signer: string;
    public channel: string;
    public portId: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'ibc';
      this.type = payload.type;
      this.signer = payload.signer;
      this.channel = payload.channel;
      this.portId = payload.portId;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgChannelOpenInit({
        json,
        type: json['@type'],
        signer: json.signer,
        channel: json.channel,
        portId: json.port_id,
      });
    }
}

export default MsgChannelOpenInit;
