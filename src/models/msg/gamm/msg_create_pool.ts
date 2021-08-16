import { Categories } from '../types';

class MsgCreatePool {
    public category: Categories;
    public type: string;
    public sender: string;
    public poolParams: any;
    public poolAssets: any;
    public futurePoolGovernor: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.sender = payload.sender;
      this.poolParams = payload.poolParams;
      this.poolAssets = payload.poolAssets;
      this.futurePoolGovernor = payload.futurePoolGovernor;
    }

    static fromJson(json: any) {
      return new MsgCreatePool({
        json,
        type: json['@type'],
        sender: json.sender,
        poolParams: json.poolParams,
        poolAssets: json.poolAssets,
        futurePoolGovernor: json.future_pool_governor,
      });
    }
}

export default MsgCreatePool;
