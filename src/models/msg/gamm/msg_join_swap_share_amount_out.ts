import { Categories } from '../types';

class MsgJoinSwapShareAmountOut {
    public category: Categories;
    public type: string;
    public poolId: string | number;
    public sender: string;
    public tokenInDenom: string;
    public shareOutAmount: string | number;
    public tokenInMaxAmount: string | number;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.poolId = payload.poolId;
      this.sender = payload.sender;
      this.tokenInDenom = payload.tokenInDenom;
      this.shareOutAmount = payload.shareOutAmount;
      this.tokenInMaxAmount = payload.tokenInMaxAmount;
    }

    static fromJson(json: any) {
      return new MsgJoinSwapShareAmountOut({
        json,
        type: json['@type'],
        poolId: json.poolId,
        sender: json.sender,
        tokenInDenom: json.tokenInDenom,
        shareOutAmount: json.shareOutAmount,
        tokenInMaxAmount: json.tokenInMaxAmount,
      });
    }
}

export default MsgJoinSwapShareAmountOut;
