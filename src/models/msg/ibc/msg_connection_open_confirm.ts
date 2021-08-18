import { Categories } from '../types';

class MsgConnectionOpenConfirm {
    public category: Categories;
    public type: string;
    public signer: string;
    public connectionId: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'ibc';
      this.type = payload.type;
      this.signer = payload.signer;
      this.connectionId = payload.connectionId;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgConnectionOpenConfirm({
        json,
        type: json['@type'],
        signer: json.signer,
        connectionId: json.connection_id,
      });
    }
}

export default MsgConnectionOpenConfirm;
