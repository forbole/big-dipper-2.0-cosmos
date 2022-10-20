import { Categories } from '../types';

class MsgConnectionOpenTry {
    public category: Categories;
    public type: string;
    public signer: string;
    public chainId: string;
    public clientId: string;
    public counterpartyClientId: string;
    public counterpartyConnectionId: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'ibc';
      this.type = payload.type;
      this.signer = payload.signer;
      this.chainId = payload.chainId;
      this.clientId = payload.clientId;
      this.counterpartyClientId = payload.counterpartyClientId;
      this.counterpartyConnectionId = payload.counterpartyConnectionId;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgConnectionOpenTry({
        json,
        type: json['@type'],
        signer: json.signer,
        chainId: json.chain_id,
        clientId: json.client_id,
        counterpartyClientId: json.counterparty?.client_id,
        counterpartyConnectionId: json.counterparty?.connection_id,
      });
    }
}

export default MsgConnectionOpenTry;
