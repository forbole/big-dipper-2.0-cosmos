import { Categories } from '../types';

class MsgLockTokens {
    public category: Categories;
    public type: string;
    public owner: string;
    public duration: any;
    public coins: any;

    constructor(payload: any) {
      this.category = 'osmosis';
      this.type = payload.type;
      this.owner = payload.owner;
      this.duration = payload.duration;
      this.coins = payload.coins;
    }

    static fromJson(json: any) {
      return new MsgLockTokens({
        type: json['@type'],
        owner: json.owner,
        duration: json.duration,
        coins: json.coins,
      });
    }
}

export default MsgLockTokens;
