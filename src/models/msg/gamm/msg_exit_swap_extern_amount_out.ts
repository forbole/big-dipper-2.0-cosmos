import * as R from 'ramda';
import numeral from 'numeral';
import { Categories } from '../types';

class MsgExitSwapExternAmountOut {
    public category: Categories;
    public type: string;
    public poolId: number;
    public sender: string;
    public tokenOut: {
      amount: number;
      denom: string;
    };
    public shareInMaxAmount: number;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.poolId = payload.poolId;
      this.sender = payload.sender;
      this.tokenOut = payload.tokenOut;
      this.shareInMaxAmount = payload.shareInMaxAmount;
    }

    static fromJson(json: any) {
      return new MsgExitSwapExternAmountOut({
        json,
        type: json['@type'],
        poolId: numeral(json.poolId).value(),
        sender: json.sender,
        tokenOut: {
          denom: R.pathOr('', ['tokenOut', 'denom'], json),
          amount: numeral(R.pathOr('0', ['tokenOut', 'amount'], json)).value(),
        },
        shareInMaxAmount: numeral(json.shareInMaxAmount).value(),
      });
    }
}

export default MsgExitSwapExternAmountOut;
