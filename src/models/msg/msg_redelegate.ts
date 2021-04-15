import numeral from 'numeral';

class MsgRedelegate {
  public category: 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking';
  public type: string;
  public delegatorAddress: string;
  public validatorSrcAddress: string;
  public validatorDstAddress: string;
  public amount: {
    denom: string;
    amount: string | number;
  }

  constructor(payload: any) {
    this.category = 'staking';
    this.type = payload.type;
    this.delegatorAddress = payload.delegatorAddress;
    this.validatorDstAddress = payload.validatorDstAddress;
    this.validatorSrcAddress = payload.validatorSrcAddress;
    this.amount = payload.amount;
  }

  static fromJson(json: any) {
    return new MsgRedelegate({
      type: json['@type'],
      delegatorAddress: json?.delegator_address,
      validatorSrcAddress: json?.validator_src_address,
      validatorDstAddress: json?.validator_dst_address,
      amount: {
        denom: json?.amount?.denom,
        amount: numeral(json?.amount?.amount).value(),
      },
    });
  }
}

export default MsgRedelegate;
