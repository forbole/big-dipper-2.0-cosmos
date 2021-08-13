import { Categories } from '../types';

class MsgBeginUnlockingAll {
    public category: Categories;
    public type: string;
    public owner: string;

    constructor(payload: any) {
      this.category = 'lockup';
      this.type = payload.type;
      this.owner = payload.owner;
    }

    static fromJson(json: any) {
      return new MsgBeginUnlockingAll({
        type: json['@type'],
        owner: json.owner,
      });
    }
}

export default MsgBeginUnlockingAll;
