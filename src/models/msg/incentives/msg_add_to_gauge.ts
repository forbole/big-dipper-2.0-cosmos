import * as R from 'ramda';
import numeral from 'numeral';
import { Categories } from '../types';

class MsgAddToGauge {
    public category: Categories;
    public type: string;
    public owner: string;
    public gaugeId: number;
    public rewards: {
      denom: string;
      amount: number;
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
        gaugeId: numeral(json.gauge_id).value(),
        rewards: R.pathOr([], ['rewards'], json).map((x) => {
          return ({
            denom: R.pathOr('', ['rewards', 'denom'], x),
            amount: numeral(R.pathOr('0', ['rewards', 'amount'], x)).value(),
          });
        }),
      });
    }
}

export default MsgAddToGauge;
