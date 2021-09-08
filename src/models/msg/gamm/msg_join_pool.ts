import * as R from 'ramda';
import numeral from 'numeral';
import { Categories } from '../types';

class MsgJoinPool {
    public category: Categories;
    public type: string;
    public poolId: number;
    public sender: string;
    public tokenInMaxs: {
      denom: string;
      amount: number;
    }[];
    public shareOutAmount: number;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.poolId = payload.poolId;
      this.sender = payload.sender;
      this.tokenInMaxs = payload.tokenInMaxs;
      this.shareOutAmount = payload.shareOutAmount;
    }

    static fromJson(json: any) {
      return new MsgJoinPool({
        json,
        type: json['@type'],
        poolId: numeral(json.poolId).value(),
        sender: json.sender,
        tokenInMaxs: json?.tokenInMaxs.map((x) => {
          return ({
            denom: R.pathOr('', ['denom'], x),
            amount: numeral(R.pathOr('0', ['amount'], x)).value(),
          });
        }),
        shareOutAmount: numeral(json.shareOutAmount).value(),
      });
    }
}

export default MsgJoinPool;
