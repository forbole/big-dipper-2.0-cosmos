import * as R from 'ramda';
import { Categories } from '../types';

class MsgRequestData {
  public category: Categories;
  public type: string;
  public json: any;
  public oracleScriptId: number;
  // public calldata: JSON;
  // public askCount: number;
  // public minCount: number;
  // public clientId: string;
  // public feeLimit: MsgCoin[];
  // public prepareGas: number;
  // public executeGas: number;
  public sender: string;

  constructor(payload: any) {
    this.category = 'oracle';
    this.json = payload.json;
    this.type = payload.type;
    this.oracleScriptId = payload.oracleScriptId;
    // this.calldata = payload.calldata;
    // this.askCount = payload.askCount;
    // this.minCount = payload.minCount;
    // this.clientId = payload.clientId;
    // this.feeLimit = payload.feeLimit;
    // this.prepareGas = payload.prepareGas;
    // this.executeGas = payload.executeGas;
    this.sender = payload.sender;
  }

  static fromJson(json: any): MsgRequestData {
    return {
      category: 'oracle',
      json,
      type: json['@type'],
      oracleScriptId: R.pathOr(0, ['oracle_script_id'], json),
      // calldata: R.pathOr('', ['calldata'], json),
      // askCount: R.pathOr(0, ['ask_count'], json),
      // minCount: R.pathOr(0, ['min_count'], json),
      // clientId: R.pathOr('', ['client_id'], json),
      // feeLimit: R.pathOr([], ['fee_limit'], json).map((x) => ({
      //   denom: x.denom,
      //   amount: R.pathOr(0, ['amount'], x),
      // })),
      // prepareGas: R.pathOr(0, ['prepare_gas'], json),
      // executeGas: R.pathOr(0, ['executeGas'], json),
      sender: R.pathOr('', ['sender'], json),
    };
  }
}

export default MsgRequestData;
