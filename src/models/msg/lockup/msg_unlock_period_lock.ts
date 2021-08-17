import numeral from 'numeral';
import { Categories } from '../types';

class MsgUnlockPeriodLock {
    public category: Categories;
    public type: string;
    public owner: string;
    public id: number;
    public json: any;

    constructor(payload: any) {
      this.category = 'lockup';
      this.type = payload.type;
      this.json = payload.json;
      this.owner = payload.owner;
      this.id = payload.id;
    }

    static fromJson(json: any) {
      return new MsgUnlockPeriodLock({
        json,
        type: json['@type'],
        owner: json.owner,
        id: numeral(json.ID).value(),
      });
    }
}

export default MsgUnlockPeriodLock;
