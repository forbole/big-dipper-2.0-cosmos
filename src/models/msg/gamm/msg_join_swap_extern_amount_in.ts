import { Categories } from '../types';

class MsgJoinSwapExternAmountIn {
    public category: Categories;
    public type: string;
    public poolId: string;
    public sender: string;
    public tokenIn: any;
    public shareOutMinAmount: any;

    constructor(payload: any) {
      this.category = 'osmosis';
      this.type = payload.type;
      this.poolId = payload.poolId;
      this.sender = payload.sender;
      this.tokenIn = payload.tokenIn;
      this.shareOutMinAmount = payload.shareOutMinAmount;
    }

    static fromJson(json: any) {
      return new MsgJoinSwapExternAmountIn({
        type: json['@type'],
        poolId: json.poolId,
        sender: json.sender,
        tokenIn: json.tokenIn,
        shareOutMinAmount: json.shareOutMinAmount,
      });
    }
}

export default MsgJoinSwapExternAmountIn;
