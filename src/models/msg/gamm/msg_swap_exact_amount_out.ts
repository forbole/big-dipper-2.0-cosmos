import * as R from 'ramda';
import numeral from 'numeral';
import { Categories } from '../types';

class MsgSwapExactAmountOut {
    public category: Categories;
    public type: string;
    public routes: {
      poolId: number;
      tokenInDenom: string
    };
    public sender: string;
    public tokenOut: {
      amount: number;
      denom: string;
    };
    public tokenInMaxAmount: number;
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
        routes: {
          poolId: numeral(R.pathOr(0, ['routes', 0, 'poolId'], json)).value(),
          tokenInDenom: R.pathOr('', ['routes', 0, 'tokenInDenom'], json),
        },
        sender: json.sender,
        tokenOut: {
          denom: R.pathOr('', ['tokenOut', 'denom'], json),
          amount: numeral(R.pathOr('0', ['tokenOut', 'amount'], json)).value(),
        },
        tokenInMaxAmount: numeral(json.tokenInMaxAmount).value(),
      });
    }
}

export default MsgSwapExactAmountOut;
