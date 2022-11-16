import type { Categories } from '../types';

class MsgExecRequest {
  public category: Categories;
  public type: string;
  public json: any;
  public signer: string;

  constructor(payload: any) {
    this.category = 'group';
    this.json = payload.json;
    this.type = payload.type;
    this.signer = payload.signer;
  }

  static fromJson(json: any): MsgExecRequest {
    return {
      category: 'group',
      json,
      type: json['@type'],
      signer: json.signer,
    };
  }
}

export default MsgExecRequest;
