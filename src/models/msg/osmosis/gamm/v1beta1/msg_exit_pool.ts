import { Categories } from '../../../types';

class MsgExitPool {
    public category: Categories;
    public type: string;
    public poolId: string;
    public sender: string;
    public tokenOutMins: any;
    public shareInAmount: string;

    constructor(payload: any) {
        this.category = 'osmosis';
        this.type = payload.type;
        this.poolId = payload.poolId;
        this.sender = payload.sender;
        this.tokenOutMins = payload.tokenOutMins;
        this.shareInAmount = payload.shareInAmount;
    }

    static fromJson(json: any) {
        return new MsgExitPool({
            type: json['@type'],
            poolId: json.poolId,
            sender: json.sender,
            tokenOutMins: json.tokenOutMins,
            shareInAmount: json.shareInAmount
        });
    }
}

export default MsgExitPool;
