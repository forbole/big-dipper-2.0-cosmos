class MsgWithdrawDelegatorReward {
  public category: 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking';
  public type: string;
  public delegatorAddress: string;
  public validatorAddress: string;

  constructor(payload: any) {
    this.category = 'distribution';
    this.type = payload.type;
    this.delegatorAddress = payload.delegatorAddress;
    this.validatorAddress = payload.validatorAddress;
  }

  static fromJson(json: any) {
    return new MsgWithdrawDelegatorReward({
      type: json['@type'],
      delegatorAddress: json.delegator_address,
      validatorAddress: json.validator_address,
    });
  }
}

export default MsgWithdrawDelegatorReward;
