import { Categories } from '../../../types';

class MsgJoinPool {
    public category: Categories;
    public type: string;
    public poolId: string;
    public sender: string;
    public tokenInMaxs: any;
    public shareOutAmount: string;

    constructor(payload: any) {
        this.category = 'osmosis';
        this.type = payload.type;
        this.poolId = payload.poolId;
        this.sender = payload.sender;
        this.tokenInMaxs = payload.tokenInMaxs;
        this.shareOutAmount = payload.shareOutAmount;
    }

    static fromJson(json: any) {
        return new MsgJoinPool({
            type: json['@type'],
            poolId: json.poolId,
            sender: json.sender,
            tokenInMaxs: json.tokenInMaxs,
            shareOutAmount: json.shareOutAmount
        });
    }
}

export default MsgJoinPool;
