import * as R from 'ramda';
import { Categories } from '../types';

class MsgMigrateCode {
  public category: Categories;
  public type: string;
  public json: any;
  public codeId: number;
  public sender: string;
  public wasmByteCode: JSON;

  constructor(payload: any) {
    this.category = 'wasm';
    this.type = payload.type;
    this.json = payload.json;
    this.codeId = payload.codeId;
    this.sender = payload.sender;
    this.wasmByteCode = payload.wasmByteCode;
  }

  static fromJson(json: any) {
    return new MsgMigrateCode({
      json,
      type: json['@type'],
      codeId: R.pathOr(0, ['code_id'], json),
      sender: json.sender,
      wasmByteCode: R.pathOr('', ['wasm_byte_code'], json),
    });
  }
}

export default MsgMigrateCode;
