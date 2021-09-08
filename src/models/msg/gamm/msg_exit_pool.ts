import * as R from 'ramda';
import numeral from 'numeral';
import { Categories } from '../types';

class MsgExitPool {
    public category: Categories;
    public type: string;
    public poolId: number;
    public sender: string;
    public tokenOutMins: {
      denom: string;
      amount: number;
    }[];
    public shareInAmount: number;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.poolId = payload.poolId;
      this.sender = payload.sender;
      this.tokenOutMins = payload.tokenOutMins;
      this.shareInAmount = payload.shareInAmount;
    }

    static fromJson(json: any) {
      return new MsgExitPool({
        json,
        type: json['@type'],
        poolId: numeral(json.poolId).value(),
        sender: json.sender,
        tokenOutMins: json?.tokenOutMins?.map((x) => {
          return ({
            denom: R.pathOr('', ['denom'], x),
            amount: numeral(R.pathOr('0', ['amount'], x)).value(),
          });
        }),
        shareInAmount: numeral(json.shareInAmount).value(),
      });
    }
}

export default MsgExitPool;
