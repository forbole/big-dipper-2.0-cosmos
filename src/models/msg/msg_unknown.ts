class MsgUnknown {
  public category: 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking' | 'unknown';
  public type: string;
  public data: JSON;

  constructor(payload: any) {
    this.category = 'unknown';
    this.type = payload.type;
    this.data = payload.data;
  }

  static fromJson(json: any) {
    return new MsgUnknown({
      type: json['@type'] ?? '',
      data: json,
    });
  }
}

export default MsgUnknown;
