import { Categories } from '../types';

class MsgCounterpartyChannel {
    public category: Categories;
    public type: string;
    public signer: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'ibc';
      this.type = payload.type;
      this.signer = payload.signer;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgCounterpartyChannel({
        json,
        type: json['@type'],
        signer: json.signer,
      });
    }
}

export default MsgCounterpartyChannel;
