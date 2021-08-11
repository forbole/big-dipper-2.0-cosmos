import { Categories } from '../../../types';

class MsgExitSwapShareAmountIn {
    public category: Categories;
    public type: string;
    public poolId: string;
    public sender: string;
    public tokenOutDenom: string;
    public shareInAmount: any;
    public tokenOutMinAmount: any;

    constructor(payload: any) {
        this.category = 'osmosis';
        this.type = payload.type;
        this.poolId = payload.poolId;
        this.sender = payload.sender;
        this.tokenOutDenom = payload.tokenOutDenom;
        this.shareInAmount = payload.shareInAmount;
        this.tokenOutMinAmount = payload.tokenOutMinAmount;
    }

    static fromJson(json: any) {
        return new MsgExitSwapShareAmountIn({
            type: json['@type'],
            poolId: json.poolId,
            sender: json.sender,
            tokenOutDenom: json.tokenOutDenom,
            shareInAmount: json.shareInAmount,
            tokenOutMinAmount: json.tokenOutMinAmount
        });
    }
}

export default MsgExitSwapShareAmountIn;
