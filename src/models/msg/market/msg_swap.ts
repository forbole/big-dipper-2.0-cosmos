import numeral from 'numeral';
import { Categories } from '../types';

class MsgSwap {
  public category: Categories;
  public type: string;
  // public proposalId: number | string;
  // public depositor: string;
  // public amount: {
  //   denom: string;
  //   amount: string | number;
  // }[];
  public json: any;
  public trader: string;
  public offerCoin:

  constructor(payload: any) {
    this.category = 'market';
    this.type = payload.type;
    this.proposalId = payload.proposalId;
    this.depositor = payload.depositor;
    this.amount = payload.amount;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSwap({
      json,
      type: json['@type'],
      proposalId: numeral(json.proposal_id).value(),
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

export default MsgSwap;
