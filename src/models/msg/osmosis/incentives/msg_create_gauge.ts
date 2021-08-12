import { Categories } from '../../types';

class MsgCreateGauge {
    public category: Categories;
    public type: string;
    public isPerpetual: boolean;
    public owner: string;
    public distributeTo: any;
    public coins: any;
    public startTime: any;
    public numEpochsPaidOver: number;

    constructor(payload: any) {
      this.category = 'osmosis';
      this.type = payload.type;
      this.isPerpetual = payload.isPerpetual;
      this.owner = payload.owner;
      this.distributeTo = payload.distributeTo;
      this.coins = payload.coins;
      this.numEpochsPaidOver = payload.numEpochsPaidOver;
    }

    static fromJson(json: any) {
      return new MsgCreateGauge({
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
