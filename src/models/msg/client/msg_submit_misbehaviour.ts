import { Categories } from '../types';

class MsgSubmitMisbehaviour {
    public category: Categories;
    public type: string;
    public signer: string;
    public clientId: string;
    public misbehaviour: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'client';
      this.type = payload.type;
      this.signer = payload.owner;
      this.clientId = payload.clientId;
      this.misbehaviour = payload.misbehaviour;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgSubmitMisbehaviour({
        json,
        type: json['@type'],
        signer: json.signer,
        clientId: json.client_id,
        misbehaviour: json.misbehaviour,
      });
    }
}

export default MsgSubmitMisbehaviour;
