import { Categories } from '../../types';

class MsgAddToGauge {
    public category: Categories;
    public type: string;
    public owner: string;
    public gaugeId: any;
    public rewards: any;


    constructor(payload: any) {
        this.category = 'osmosis';
        this.type = payload.type;
        this.owner = payload.owner;
        this.gaugeId = payload.gaugeId;
        this.rewards = payload.rewards;
    }

    static fromJson(json: any) {
        return new MsgAddToGauge({
            type: json['@type'],
            owner: json.owner,
            gaugeId: json.gauge_id,
            rewards: json.rewards
        });
    }
}

export default MsgAddToGauge;
