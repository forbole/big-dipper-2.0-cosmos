import { Categories } from '../types';

class MsgSwapExactAmountOut {
    public category: Categories;
    public type: string;
    public routes: any;
    public sender: string;
    public tokenOut: any;
    public tokenInMaxAmount: any;

    constructor(payload: any) {
      this.category = 'osmosis';
      this.type = payload.type;
      this.routes = payload.routes;
      this.sender = payload.sender;
      this.tokenOut = payload.tokenOut;
      this.tokenInMaxAmount = payload.tokenInMaxAmount;
    }

    static fromJson(json: any) {
      return new MsgSwapExactAmountOut({
        type: json['@type'],
        routes: json.routes,
        sender: json.sender,
        tokenOut: json.tokenOut,
        tokenInMaxAmount: json.tokenInMaxAmount,
      });
    }
}

export default MsgSwapExactAmountOut;
