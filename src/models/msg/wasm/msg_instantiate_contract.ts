import * as R from 'ramda';
import { Categories } from '../types';

class MsgInstantiateContract {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;
  public admin: string;
  public codeId: number;
  public initMsg: JSON;
  public initCoins: MsgCoin[];

  constructor(payload: any) {
    this.category = 'wasm';
    this.type = payload.type;
    this.json = payload.json;
    this.sender = payload.sender;
    this.admin = payload.admin;
    this.codeId = payload.codeId;
    this.initMsg = payload.initMsg;
    this.initCoins = payload.initCoins;
  }

  static fromJson(json: any) {
    return new MsgInstantiateContract({
      json,
      type: json['@type'],
      sender: json.sender,
      admin: json.admin,
      codeId: R.pathOr(0, ['code_id'], json),
      initMsg: R.pathOr('', ['init_msg'], json),
      initCoins: R.pathOr([], ['init_coins'], json).map((x) => ({
        denom: R.pathOr('', ['denom'], x),
        amount: R.pathOr(0, ['amount'], x),
      })),
    });
  }
}

export default MsgInstantiateContract;
