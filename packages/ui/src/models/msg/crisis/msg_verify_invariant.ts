import type { Categories } from '../types';

class MsgVerifyInvariant {
  public category: Categories;

  public type: string;

  public sender: string;

  public invariantModuleName: string;

  public invariantRoute: string;

  public json: any;

  constructor(payload: any) {
    this.category = 'crisis';
    this.json = payload.json;
    this.type = payload.type;
    this.sender = payload.sender;
    this.invariantModuleName = payload.invariantModuleName;
    this.invariantRoute = payload.invariantRoute;
  }

  static fromJson(json: any): MsgVerifyInvariant {
    return {
      category: 'crisis',
      json,
      type: json['@type'],
      sender: json.sender,
      invariantModuleName: json.invariant_module_name,
      invariantRoute: json.invariant_route,
    };
  }
}

export default MsgVerifyInvariant;
