import numeral from 'numeral';
import { Categories } from '../types';

class MsgJoinSwapShareAmountOut {
    public category: Categories;
    public type: string;
    public poolId: number;
    public sender: string;
    public tokenInDenom: string;
    public shareOutAmount: number;
    public tokenInMaxAmount: number;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.poolId = payload.poolId;
      this.sender = payload.sender;
      this.tokenInDenom = payload.tokenInDenom;
      this.shareOutAmount = payload.shareOutAmount;
      this.tokenInMaxAmount = payload.tokenInMaxAmount;
    }

    static fromJson(json: any) {
      return new MsgJoinSwapShareAmountOut({
        json,
        type: json['@type'],
        poolId: numeral(json.poolId).value(),
        sender: json.sender,
        tokenInDenom: numeral(json.tokenInDenom).value(),
        shareOutAmount: numeral(json.shareOutAmount).value(),
        tokenInMaxAmount: numeral(json.tokenInMaxAmount).value(),
      });
    }
}

export default MsgJoinSwapShareAmountOut;
