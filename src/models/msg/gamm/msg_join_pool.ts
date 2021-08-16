import { Categories } from '../types';

class MsgJoinPool {
    public category: Categories;
    public type: string;
    public poolId: string | number;
    public sender: string;
    public tokenInMaxs: {
      denom: string;
      amount: string | number;
    }[];
    public shareOutAmount: string | number;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.poolId = payload.poolId;
      this.sender = payload.sender;
      this.tokenInMaxs = payload.tokenInMaxs;
      this.shareOutAmount = payload.shareOutAmount;
    }

    static fromJson(json: any) {
      return new MsgJoinPool({
        json,
        type: json['@type'],
        poolId: json.poolId,
        sender: json.sender,
        tokenInMaxs: json.tokenInMaxs,
        shareOutAmount: json.shareOutAmount,
      });
    }
}

export default MsgJoinPool;
