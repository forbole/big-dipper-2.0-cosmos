import { Categories } from '../types';

class MsgReceivePacket {
    public category: Categories;
    public type: string;
    public signer: string;
    public sourceChannel: string;
    public destinationChannel: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'ibc';
      this.type = payload.type;
      this.signer = payload.signer;
      this.sourceChannel = payload.sourceChannel;
      this.destinationChannel = payload.destinationChannel;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgReceivePacket({
        json,
        type: json['@type'],
        signer: json.signer,
        sourceChannel: json.packet?.source_channel,
        destinationChannel: json.packet?.destination_channel,
      });
    }
}

export default MsgReceivePacket;
