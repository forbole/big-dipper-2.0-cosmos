import numeral from 'numeral';
import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgDeposit {
  public category: Categories;

  public type: string;

  public proposalId: number | string;

  public depositor: string;

  public amount: MsgCoin[];

  public json: object;

  constructor(payload: object) {
    this.category = 'governance';
    this.type = R.pathOr('', ['type'], payload);
    this.proposalId = R.pathOr('', ['proposalId'], payload);
    this.depositor = R.pathOr('', ['depositor'], payload);
    this.amount = R.pathOr([], ['amount'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgDeposit {
    return {
      category: 'governance',
      json,
      type: R.pathOr('', ['@type'], json),
      proposalId: numeral(R.pathOr('0', ['proposal_id'], json)).value() ?? '0',
      depositor: R.pathOr('', ['depositor'], json),
      amount: R.pathOr([], ['amount'], json).map((x?: MsgCoin) => ({
        denom: x?.denom ?? '',
        amount: x?.amount ?? '0',
      })),
    };
  }
}

export default MsgDeposit;
