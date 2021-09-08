import * as R from 'ramda';
import numeral from 'numeral';
import { Categories } from '../types';

class MsgLockTokens {
    public category: Categories;
    public type: string;
    public owner: string;
    public duration: string;
    public coins: {
      denom: string;
      amount: number;
    }[];
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
        coins: R.pathOr([], ['coins'], json).map((x) => {
          return ({
            denom: R.pathOr('', ['coins', 'denom'], x),
            amount: numeral(R.pathOr('0', ['coins', 'amount'], x)).value(),
          });
        }),
      });
    }
}

export default MsgLockTokens;
