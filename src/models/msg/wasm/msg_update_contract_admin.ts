import * as R from 'ramda';
import { Categories } from '../types';

class MsgUpdateContractAdmin {
  public category: Categories;
  public type: string;
  public json: any;
  public admin: string;
  public newAdmin: string;
  public contract: string;

  constructor(payload: any) {
    this.category = 'wasm';
    this.type = payload.type;
    this.json = payload.json;
    this.admin = payload.admin;
    this.newAdmin = payload.newAdmin;
    this.contract = payload.contract;
  }

  static fromJson(json: any) {
    return new MsgUpdateContractAdmin({
      json,
      type: json['@type'],
      admin: json.admin,
      newAdmin: R.pathOr('', ['new_admin'], json),
      contract: R.pathOr('', ['contract'], json),
    });
  }
}

export default MsgUpdateContractAdmin;
