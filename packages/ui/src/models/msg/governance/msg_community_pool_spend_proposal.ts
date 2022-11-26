import * as R from 'ramda';

class MsgCommunityPoolSpendProposal {
  public type: string;

  public title: string;

  public description: string;

  public recipient: string;

  public amount: MsgCoin[];

  constructor(payload: object) {
    this.type = R.pathOr('', ['type'], payload);
    this.title = R.pathOr('', ['title'], payload);
    this.description = R.pathOr('', ['description'], payload);
    this.recipient = R.pathOr('', ['recipient'], payload);
    this.amount = R.pathOr([], ['amount'], payload);
  }

  static fromJson(json: object): MsgCommunityPoolSpendProposal {
    return {
      type: R.pathOr('', ['@type'], json),
      title: R.pathOr('', ['title'], json),
      description: R.pathOr('', ['description'], json),
      recipient: R.pathOr('', ['recipient'], json),
      amount: R.pathOr([], ['amount'], json).map((x?: MsgCoin) => ({
        denom: x?.denom ?? '',
        amount: x?.amount ?? '0',
      })),
    };
  }
}

export default MsgCommunityPoolSpendProposal;
