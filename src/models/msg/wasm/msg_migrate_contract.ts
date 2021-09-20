import * as R from 'ramda';
import { Categories } from '../types';

class MsgMigrateContract {
  public category: Categories;
  public type: string;
  public json: any;
  public admin: string;
  public contract: string;
  public newCodeId: number;
  public migrateMsg: string;

  constructor(payload: any) {
    this.category = 'wasm';
    this.type = payload.type;
    this.json = payload.json;
    this.admin = payload.admin;
    this.contract = payload.contract;
    this.newCodeId = payload.newCodeId;
    this.migrateMsg = payload.migrateMsg;
  }

  static fromJson(json: any) {
    return new MsgMigrateContract({
      json,
      type: json['@type'],
      admin: json.admin,
      contract: json.contract,
      newCodeId: R.pathOr(0, ['new_code_id'], json),
      migrateMsg: R.pathOr('', ['migrate_msg'], json),
    });
  }
}

export default MsgMigrateContract;
