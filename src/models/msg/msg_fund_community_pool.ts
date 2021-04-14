import numeral from 'numeral';

class MsgFundCommunityPool {
  public category: 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking';
  public type: string;
  public depositor: string;
  public amount: {
    denom: string;
    amount: string | number;
  }[]

  constructor(payload: any) {
    this.category = 'distribution';
    this.type = payload.type;
    this.depositor = payload.depositor;
    this.amount = payload.amount;
  }

  static fromJson(json: any) {
    return new MsgFundCommunityPool({
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
