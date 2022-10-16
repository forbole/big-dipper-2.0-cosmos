import { Categories } from '../types';

class MsgCreateClient {
    public category: Categories;
    public type: string;
    public signer: string;
    public chainId: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'ibc';
      this.type = payload.type;
      this.signer = payload.signer;
      this.chainId = payload.chainId;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgCreateClient({
        json,
        type: json['@type'],
        signer: json.signer,
        chainId: json.client_state?.chain_id,
      });
    }
}

export default MsgCreateClient;
