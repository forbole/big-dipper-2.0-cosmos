import { Categories } from '../types';

class MsgBeginUnlockingAll {
    public category: Categories;
    public type: string;
    public owner: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'lockup';
      this.type = payload.type;
      this.json = payload.json;
      this.owner = payload.owner;
    }

    static fromJson(json: any) {
      return new MsgBeginUnlockingAll({
        json,
        type: json['@type'],
        owner: json.owner,
      });
    }
}

export default MsgBeginUnlockingAll;
