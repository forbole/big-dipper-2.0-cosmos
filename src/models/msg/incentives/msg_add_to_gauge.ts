import { Categories } from '../types';

class MsgAddToGauge {
    public category: Categories;
    public type: string;
    public owner: string;
    public gaugeId: number | string;
    public rewards: {
      denom: string;
      amount: string | number;
    }[];
    public json: any;

    constructor(payload: any) {
      this.category = 'incentives';
      this.type = payload.type;
      this.json = payload.json;
      this.owner = payload.owner;
      this.gaugeId = payload.gaugeId;
      this.rewards = payload.rewards;
    }

    static fromJson(json: any) {
      return new MsgAddToGauge({
        json,
        type: json['@type'],
        owner: json.owner,
        gaugeId: json.gauge_id,
        rewards: json.rewards,
      });
    }
}

export default MsgAddToGauge;
