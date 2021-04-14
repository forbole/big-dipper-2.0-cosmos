import numeral from 'numeral';

class MsgSend {
  public category: 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking';
  public type: string;
  public fromAddress: string;
  public toAddress: string;
  public amount: {
    denom: string;
    amount: string | number;
  }[];

  constructor(payload: any) {
    this.category = 'bank';
    this.type = payload.type;
    this.fromAddress = payload.fromAddress;
    this.toAddress = payload.toAddress;
    this.amount = payload.amount;
  }

  static fromJson(json: any) {
    return new MsgSend({
      type: json['@type'],
      fromAddress: json.from_address,
      toAddress: json.to_address,
      amount: json?.amount.map((x) => {
        return ({
          denom: x?.denom,
          amount: numeral(x?.amount).value(),
        });
      }),
    });
  }
}

export default MsgSend;
