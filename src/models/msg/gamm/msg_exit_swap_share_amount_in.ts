import { Categories } from '../types';

class MsgExitSwapShareAmountIn {
    public category: Categories;
    public type: string;
    public poolId: string | number;
    public sender: string;
    public tokenOutDenom: string;
    public shareInAmount: string | number;
    public tokenOutMinAmount: string | number;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.poolId = payload.poolId;
      this.sender = payload.sender;
      this.tokenOutDenom = payload.tokenOutDenom;
      this.shareInAmount = payload.shareInAmount;
      this.tokenOutMinAmount = payload.tokenOutMinAmount;
    }

    static fromJson(json: any) {
      return new MsgExitSwapShareAmountIn({
        json,
        type: json['@type'],
        poolId: json.poolId,
        sender: json.sender,
        tokenOutDenom: json.tokenOutDenom,
        shareInAmount: json.shareInAmount,
        tokenOutMinAmount: json.tokenOutMinAmount,
      });
    }
}

export default MsgExitSwapShareAmountIn;
