import numeral from 'numeral';
import * as R from 'ramda';
import { Categories } from '../types';

class MsgDeposit {
  public category: Categories;
  public type: string;
  public proposalId: number | string;
  public depositor: string;
  public amount: MsgCoin[];
  public json: any;

  constructor(payload: any) {
    this.category = 'governance';
    this.type = payload.type;
    this.proposalId = payload.proposalId;
    this.depositor = payload.depositor;
    this.amount = payload.amount;
    this.json = payload.json;
  }

  static fromJson(json: any): MsgDeposit {
    return {
      category: 'governance',
      json,
      type: json['@type'],
      proposalId: numeral(json.proposal_id).value() ?? '',
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

export default MsgDeposit;
