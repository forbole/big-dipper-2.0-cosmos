import * as R from 'ramda';
import numeral from 'numeral';
import { Categories } from '../types';

class MsgJoinSwapExternAmountIn {
    public category: Categories;
    public type: string;
    public poolId: number;
    public sender: string;
    public tokenIn: {
      denom: string;
      amount: number;
    }[];
    public shareOutMinAmount: number;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.poolId = payload.poolId;
      this.sender = payload.sender;
      this.tokenIn = payload.tokenIn;
      this.shareOutMinAmount = payload.shareOutMinAmount;
    }

    static fromJson(json: any) {
      return new MsgJoinSwapExternAmountIn({
        json,
        type: json['@type'],
        poolId: numeral(json.poolId).value(),
        sender: json.sender,
        tokenIn: json?.tokenIn.map((x) => {
          return ({
            denom: R.pathOr('', ['tokenIn', 'denom'], x),
            amount: numeral(R.pathOr('0', ['tokenIn', 'amount'], x)).value(),
          });
        }),
        shareOutMinAmount: numeral(json.shareOutMinAmount).value(),
      });
    }
}

export default MsgJoinSwapExternAmountIn;
