import * as R from 'ramda';
import numeral from 'numeral';
import { Categories } from '../types';

class MsgSwapExactAmountIn {
    public category: Categories;
    public type: string;
    public routes: {
      poolId: number;
      tokenOutDenom: string;
    };
    public sender: string;
    public tokenIn: {
      amount: number;
      denom: string;
    };
    public tokenOutMinAmount: number;
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
        routes: json?.routes.map((x) => {
          return ({
            poolId: numeral(R.pathOr(0, [x.poolId], json)).value(),
            tokenOutDenom: x.tokenOutDenom,
          });
        }),
        sender: json.sender,
        tokenIn: {
          denom: R.pathOr('', ['tokenIn', 'denom'], json),
          amount: numeral(R.pathOr('0', ['tokenIn', 'amount'], json)).value(),
        },
        tokenOutMinAmount: numeral(json.tokenOutMinAmount).value(),
      });
    }
}

export default MsgSwapExactAmountIn;
