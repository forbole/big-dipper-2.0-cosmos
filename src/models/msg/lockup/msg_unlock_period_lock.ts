import { Categories } from '../types';

class MsgUnlockPeriodLock {
    public category: Categories;
    public type: string;
    public owner: string;
    public ID: number;
    public json: any;

    constructor(payload: any) {
      this.category = 'lockup';
      this.type = payload.type;
      this.json = payload.json;
      this.owner = payload.owner;
      this.ID = payload.ID;
    }

    static fromJson(json: any) {
      return new MsgUnlockPeriodLock({
        json,
        type: json['@type'],
        owner: json.owner,
        ID: json.ID,
      });
    }
}

export default MsgUnlockPeriodLock;
