import { Categories } from '../../../types';

class OsmosisMsgCreatePool {
    public category: Categories;
    public type: string;
    public sender: string;
    public poolParams: any;
    public poolAssets: boolean;
    public futurePoolGovernor: string;

    constructor(payload: any) {
        this.category = 'osmosis';
        this.type = payload.type;
        this.sender = payload.sender;
        this.poolParams = payload.poolParams;
        this.poolAssets = payload.poolAssets;
        this.futurePoolGovernor = payload.futurePoolGovernor;
    }

    static fromJson(json: any) {
        return new OsmosisMsgCreatePool({
            type: json['@type'],
            sender: json.sender,
            poolParams: json.poolParams,
            poolAssets: json.poolAssets,
            futurePoolGovernor: json.future_pool_governor
        });
    }
}

export default OsmosisMsgCreatePool;
