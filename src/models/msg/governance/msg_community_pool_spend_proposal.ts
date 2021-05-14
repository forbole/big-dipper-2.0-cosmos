import numeral from 'numeral';

class MsgCommunityPoolSpendProposal {
  public type: string;
  public title: string;
  public description: string;
  public recipient: string;
  public amount: {
    denom: string;
    amount: string | number;
  }[];

  constructor(payload: any) {
    this.type = payload.type;
    this.title = payload.title;
    this.description = payload.description;
    this.recipient = payload.recipient;
    this.amount = payload.amount;
  }

  static fromJson(json: any) {
    return new MsgCommunityPoolSpendProposal({
      type: json['@type'],
      title: json.title,
      description: json.description,
      recipient: json.recipient,
      amount: json?.amount.map((x) => {
        return ({
          denom: x?.denom,
          amount: numeral(x?.amount).value(),
        });
      }),
    });
  }
}

export default MsgCommunityPoolSpendProposal;
