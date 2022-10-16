import { Categories } from '../types';

class MsgConnectionOpenAck {
    public category: Categories;
    public type: string;
    public signer: string;
    public connectionId: string;
    public counterpartyConnectionId: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'ibc';
      this.type = payload.type;
      this.signer = payload.signer;
      this.connectionId = payload.connectionId;
      this.counterpartyConnectionId = payload.counterpartyConnectionId;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgConnectionOpenAck({
        json,
        type: json['@type'],
        signer: json.signer,
        connectionId: json.connection_id,
        counterpartyConnectionId: json.counterparty_connection_id,
      });
    }
}

export default MsgConnectionOpenAck;
