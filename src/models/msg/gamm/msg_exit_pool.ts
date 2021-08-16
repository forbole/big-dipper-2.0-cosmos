import { Categories } from '../types';

class MsgExitPool {
    public category: Categories;
    public type: string;
    public poolId: string | number;
    public sender: string;
    public tokenOutMins: {
      denom: string;
      amount: string | number;
    }[];
    public shareInAmount: string | number;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.poolId = payload.poolId;
      this.sender = payload.sender;
      this.tokenOutMins = payload.tokenOutMins;
      this.shareInAmount = payload.shareInAmount;
    }

    static fromJson(json: any) {
      return new MsgExitPool({
        json,
        type: json['@type'],
        poolId: json.poolId,
        sender: json.sender,
        tokenOutMins: json.tokenOutMins,
        shareInAmount: json.shareInAmount,
      });
    }
}

export default MsgExitPool;
