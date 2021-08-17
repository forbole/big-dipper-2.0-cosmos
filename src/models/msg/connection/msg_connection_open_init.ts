import { Categories } from '../types';

class MsgConnectionOpenInit {
    public category: Categories;
    public type: string;
    public signer: string;
    public clientId: string;
    public counterparty: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'connection';
      this.type = payload.type;
      this.signer = payload.signer;
      this.clientId = payload.clientId;
      this.counterparty = payload.counterparty;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgConnectionOpenInit({
        json,
        type: json['@type'],
        signer: json.signer,
        clientId: json.client_id,
        counterparty: json.counterparty,
      });
    }
}

export default MsgConnectionOpenInit;
