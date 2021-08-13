import { Categories } from '../types';

class MsgSwapExactAmountOut {
    public category: Categories;
    public type: string;
    public poolId: string;
    public sender: string;
    public tokenOut: any;
    public shareInMaxAmount: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.poolId = payload.poolId;
      this.sender = payload.sender;
      this.tokenOut = payload.tokenOut;
      this.shareInMaxAmount = payload.shareInMaxAmount;
    }

    static fromJson(json: any) {
      return new MsgSwapExactAmountOut({
        type: json['@type'],
        poolId: json.poolId,
        sender: json.sender,
        tokenOut: json.tokenOut,
        shareInMaxAmount: json.shareInMaxAmount,
      });
    }
}

export default MsgSwapExactAmountOut;
