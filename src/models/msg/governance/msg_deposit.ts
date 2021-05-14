import numeral from 'numeral';
import { Categories } from '../types';

class MsgDeposit {
  public category: Categories;
  public type: string;
  public proposalId: number | string;
  public depositor: string;
  public amount: {
    denom: string;
    amount: string | number;
  }[];
  public json: any;

  constructor(payload: any) {
    this.category = 'governance';
    this.type = payload.type;
    this.proposalId = payload.proposalId;
    this.depositor = payload.depositor;
    this.amount = payload.amount;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgDeposit({
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

export default MsgDeposit;
