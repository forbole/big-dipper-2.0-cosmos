class MsgTextProposal {
  public type: string;
  public title: string;
  public description: string;

  constructor(payload: any) {
    this.type = payload.type;
    this.title = payload.title;
    this.description = payload.description;
  }

  static fromJson(json: any): MsgTextProposal {
    return {
      type: json['@type'],
      title: json.title,
      description: json.description,
    };
  }
}

export default MsgTextProposal;
