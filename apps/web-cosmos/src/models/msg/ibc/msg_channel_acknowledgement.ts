import { Categories } from '../types';

class MsgAcknowledgement {
    public category: Categories;
    public type: string;
    public signer: string;
    public sourceChannel: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'ibc';
      this.type = payload.type;
      this.signer = payload.signer;
      this.sourceChannel = payload.sourceChannel;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgAcknowledgement({
        json,
        type: json['@type'],
        signer: json.signer,
        sourceChannel: json.packet?.source_channel,
      });
    }
}

export default MsgAcknowledgement;
