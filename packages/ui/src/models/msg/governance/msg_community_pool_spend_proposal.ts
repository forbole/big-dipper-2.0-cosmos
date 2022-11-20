import * as R from 'ramda';

class MsgCommunityPoolSpendProposal {
  public type: string;

  public title: string;

  public description: string;

  public recipient: string;

  public amount: MsgCoin[];

  constructor(payload: any) {
    this.type = payload.type;
    this.title = payload.title;
    this.description = payload.description;
    this.recipient = payload.recipient;
    this.amount = payload.amount;
  }

  static fromJson(json: any): MsgCommunityPoolSpendProposal {
    return {
      type: json['@type'],
      title: json.title,
      description: json.description,
      recipient: json.recipient,
      amount: json?.amount.map((x?: { denom: string; amount?: number }) => ({
          denom: x?.denom,
          amount: R.pathOr('0', ['amount'], x),
        })),
    };
  }
}

export default MsgCommunityPoolSpendProposal;
