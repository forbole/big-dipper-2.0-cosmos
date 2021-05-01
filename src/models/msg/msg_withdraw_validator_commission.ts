class MsgWithdrawValidatorCommission {
  public category: 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking';
  public type: string;
  public validatorAddress: string;

  constructor(payload: any) {
    this.category = 'distribution';
    this.type = payload.type;
    this.validatorAddress = payload.validatorAddress;
  }

  static fromJson(json: any) {
    return new MsgWithdrawValidatorCommission({
      type: json['@type'],
      validatorAddress: json.validator_address,
    });
  }
}

export default MsgWithdrawValidatorCommission;
