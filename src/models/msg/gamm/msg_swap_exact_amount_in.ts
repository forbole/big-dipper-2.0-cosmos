import { Categories } from '../types';

class MsgSwapExactAmountIn {
    public category: Categories;
    public type: string;
    public routes: any;
    public sender: string;
    public tokenIn: any;
    public tokenOutMinAmount: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.routes = payload.routes;
      this.sender = payload.sender;
      this.tokenIn = payload.tokenIn;
      this.tokenOutMinAmount = payload.tokenOutMinAmount;
    }

    static fromJson(json: any) {
      return new MsgSwapExactAmountIn({
        json,
        type: json['@type'],
        routes: json.routes,
        sender: json.sender,
        tokenIn: json.tokenIn,
        tokenOutMinAmount: json.tokenOutMinAmount,
      });
    }
}

export default MsgSwapExactAmountIn;
