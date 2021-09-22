import * as R from 'ramda';
import { Categories } from '../types';

class MsgRequestData {
  public category: Categories;
  public type: string;
  public json: any;
  public oracleScriptId: number;
  public calldata: JSON;
  public askCount: number;
  public minCount: number;
  public clientId: string;
  public feeLimit: MsgCoins[];

  constructor(payload: any) {
    this.category = 'oracle';
    this.json = payload.json;
    this.type = payload.type;
    this.oracleScriptId = payload.oracleScriptId;
    this.calldata = payload.calldata;
    this.askCount = payload.askCount;
    this.minCount = payload.minCount;
    this.clientId = payload.clientId;
  }

  static fromJson(json: any) {
    return new MsgRequestData({
      json,
      type: json['@type'],
      oracleScriptId: R.pathOr(0, ['oracle_script_id'], json),
      calldata: R.pathOr('', ['calldata'], json),
      askCount: R.pathOr(0, ['ask_count'], json),
      minCount: R.pathOr(0, ['min_count'], json),
    });
  }
}

export default MsgRequestData;
