import { Categories } from '../types';

class MsgSwapExactAmountOut {
    public category: Categories;
    public type: string;
    public routes: {
      poolId: string | number;
      tokenInDenom: string
    }[];
    public sender: string;
    public tokenOut: {
      amount: string;
      denom: string;
    };
    public tokenInMaxAmount: string | number;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.routes = payload.routes;
      this.sender = payload.sender;
      this.tokenOut = payload.tokenOut;
      this.tokenInMaxAmount = payload.tokenInMaxAmount;
    }

    static fromJson(json: any) {
      return new MsgSwapExactAmountOut({
        json,
        type: json['@type'],
        routes: json.routes,
        sender: json.sender,
        tokenOut: json.tokenOut,
        tokenInMaxAmount: json.tokenInMaxAmount,
      });
    }
}

export default MsgSwapExactAmountOut;
