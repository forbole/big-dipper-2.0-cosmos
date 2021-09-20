import * as R from 'ramda';
import { Categories } from '../types';

class MsgClearContractAdmin {
  public category: Categories;
  public type: string;
  public json: any;
  public admin: string;
  public contract: string;

  constructor(payload: any) {
    this.category = 'wasm';
    this.type = payload.type;
    this.json = payload.json;
    this.admin = payload.admin;
    this.contract = payload.contract;
  }

  static fromJson(json: any) {
    return new MsgClearContractAdmin({
      json,
      type: json['@type'],
      admin: json.admin,
      contract: R.pathOr('', ['contract'], json),
    });
  }
}

export default MsgClearContractAdmin;
