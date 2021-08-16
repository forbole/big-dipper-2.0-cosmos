import { Categories } from '../types';

class MsgCreateGauge {
    public category: Categories;
    public type: string;
    public isPerpetual: boolean;
    public owner: string;
    public distributeTo: any;
    public coins: any;
    public startTime: any;
    public numEpochsPaidOver: number;
    public json: any;

    constructor(payload: any) {
      this.category = 'incentives';
      this.type = payload.type;
      this.json = payload.json;
      this.isPerpetual = payload.isPerpetual;
      this.owner = payload.owner;
      this.distributeTo = payload.distributeTo;
      this.coins = payload.coins;
      this.numEpochsPaidOver = payload.numEpochsPaidOver;
    }

    static fromJson(json: any) {
      return new MsgCreateGauge({
        json,
        type: json['@type'],
        isPerpetual: json.is_perpetual,
        owner: json.owner,
        distributeTo: json.distribute_to,
        coins: json.coins,
        startTime: json.start_time,
        numEpochsPaidOver: json.num_epochs_paid_over,
      });
    }
}

export default MsgCreateGauge;
