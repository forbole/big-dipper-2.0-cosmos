import { Categories } from '../types';

class MsgChannelOpenTry {
    public category: Categories;
    public type: string;
    public signer: string;
    public channel: string;
    public portId: string;
    public counterpartyVersion: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'ibc';
      this.type = payload.type;
      this.signer = payload.signer;
      this.channel = payload.channel;
      this.portId = payload.portId;
      this.counterpartyVersion = payload.counterpartyVersion;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgChannelOpenTry({
        json,
        type: json['@type'],
        signer: json.signer,
        channel: json.channel,
        portId: json.port_id,
        counterpartyVersion: json.counterparty_version,
      });
    }
}

export default MsgChannelOpenTry;
