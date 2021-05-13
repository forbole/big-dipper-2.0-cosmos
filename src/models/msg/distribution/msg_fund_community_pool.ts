import numeral from 'numeral';
import { Categories } from '../types';

class MsgFundCommunityPool {
  public category: Categories;
  public type: string;
  public depositor: string;
  public amount: {
    denom: string;
    amount: string | number;
  }[];
  public json: any;

  constructor(payload: any) {
    this.category = 'distribution';
    this.type = payload.type;
    this.depositor = payload.depositor;
    this.amount = payload.amount;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgFundCommunityPool({
      json,
      type: json['@type'],
      depositor: json.depositor,
      amount: json?.amount.map((x) => {
        return ({
          denom: x?.denom,
          amount: numeral(x?.amount).value(),
        });
      }),
    });
  }
}

export default MsgFundCommunityPool;
