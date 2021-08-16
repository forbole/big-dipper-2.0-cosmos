import { Categories } from '../types';

class MsgLockTokens {
    public category: Categories;
    public type: string;
    public owner: string;
    public duration: any;
    public coins: any;
    public json: any;

    constructor(payload: any) {
      this.category = 'lockup';
      this.type = payload.type;
      this.json = payload.json;
      this.owner = payload.owner;
      this.duration = payload.duration;
      this.coins = payload.coins;
    }

    static fromJson(json: any) {
      return new MsgLockTokens({
        json,
        type: json['@type'],
        owner: json.owner,
        duration: json.duration,
        coins: json.coins,
      });
    }
}

export default MsgLockTokens;
