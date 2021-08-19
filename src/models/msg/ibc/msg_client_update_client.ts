import { Categories } from '../types';

class MsgUpdateClient {
    public category: Categories;
    public type: string;
    public signer: string;
    public chainId: string;
    public clientId: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'ibc';
      this.type = payload.type;
      this.signer = payload.signer;
      this.chainId = payload.chainId;
      this.clientId = payload.clientId;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgUpdateClient({
        json,
        type: json['@type'],
        signer: json.signer,
        chainId: json.header?.signed_header?.header?.chain_id,
        clientId: json.client_id,
      });
    }
}

export default MsgUpdateClient;
