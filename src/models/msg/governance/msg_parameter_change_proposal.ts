class MsgParameterChangeProposal {
  public type: string;
  public title: string;
  public description: string;
  public changes: {
    subspace: string;
    key: string;
    value: string | number;
  }[]

  constructor(payload: any) {
    this.type = payload.type;
    this.title = payload.title;
    this.description = payload.description;
    this.changes = payload.changes;
  }

  static fromJson(json: any) {
    return new MsgParameterChangeProposal({
      type: json['@type'],
      title: json.title,
      description: json.description,
      changes: json?.changes?.map((x) => {
        return {
          subspace: x?.subspace,
          key: x?.key,
          value: x?.value,
        };
      }),
    });
  }
}

export default MsgParameterChangeProposal;
