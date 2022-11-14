import * as R from 'ramda';
import { Categories } from '../types';

class MsgFundCommunityPool {
  public category: Categories;
  public type: string;
  public depositor: string;
  public amount: MsgCoin[];
  public json: any;

  constructor(payload: any) {
    this.category = 'distribution';
    this.type = payload.type;
    this.depositor = payload.depositor;
    this.amount = payload.amount;
    this.json = payload.json;
  }

  static fromJson(json: any): MsgFundCommunityPool {
    return {
      category: 'distribution',
      json,
      type: json['@type'],
      depositor: json.depositor,
      amount: json?.amount.map((x?: { denom?: string; amount?: number }) => {
        return {
          denom: x?.denom,
          amount: R.pathOr('0', ['amount'], x),
        };
      }),
    };
  }
}

export default MsgFundCommunityPool;
