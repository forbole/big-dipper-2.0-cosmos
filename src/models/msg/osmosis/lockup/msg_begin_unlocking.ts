import { Categories } from '../../types';

class MsgBeginUnlocking {
    public category: Categories;
    public type: string;
    public owner: string;
    public ID: number | string;

    constructor(payload: any) {
      this.category = 'osmosis';
      this.type = payload.type;
      this.owner = payload.owner;
      this.ID = payload.ID;
    }

    static fromJson(json: any) {
      return new MsgBeginUnlocking({
        type: json['@type'],
        owner: json.owner,
        ID: json.ID,
      });
    }
}

export default MsgBeginUnlocking;
