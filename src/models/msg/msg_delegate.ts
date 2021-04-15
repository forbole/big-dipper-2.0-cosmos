import numeral from 'numeral';

class MsgDelegate {
  public category: 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking';
  public type: string;
  public delegatorAddress: string;
  public validatorAddress: string;
  public amount: {
    denom: string;
    amount: string | number;
  }

  constructor(payload: any) {
    this.category = 'staking';
    this.type = payload.type;
    this.delegatorAddress = payload.delegatorAddress;
    this.validatorAddress = payload.validatorAddress;
    this.amount = payload.amount;
  }

  static fromJson(json: any) {
    return new MsgDelegate({
      type: json['@type'],
      delegatorAddress: json?.delegator_address,
      validatorAddress: json?.validator_address,
      amount: {
        denom: json?.amount?.denom,
        amount: numeral(json?.amount?.amount).value(),
      },
    });
  }
}

export default MsgDelegate;
