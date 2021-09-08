import numeral from 'numeral';
import { Categories } from '../types';

class MsgExitSwapShareAmountIn {
    public category: Categories;
    public type: string;
    public poolId: number;
    public sender: string;
    public tokenOutDenom: string;
    public shareInAmount: number;
    public tokenOutMinAmount: number;
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
        poolId: numeral(json.poolId).value(),
        sender: json.sender,
        tokenOutDenom: json.tokenOutDenom,
        shareInAmount: numeral(json.shareInAmount).value(),
        tokenOutMinAmount: numeral(json.tokenOutMinAmount).value(),
      });
    }
}

export default MsgExitSwapShareAmountIn;
