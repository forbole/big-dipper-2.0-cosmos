import * as R from 'ramda';
import { Categories } from '../types';

class MsgExecuteContract {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;
  public contract: string;
  public executeMsg: JSON;
  public coins: MsgCoin[];

  constructor(payload: any) {
    this.category = 'wasm';
    this.type = payload.type;
    this.json = payload.json;
    this.sender = payload.sender;
    this.contract = payload.contract;
    this.executeMsg = payload.executeMsg;
    this.coins = payload.coins;
  }

  static fromJson(json: any) {
    return new MsgExecuteContract({
      json,
      type: json['@type'],
      sender: json.sender,
      contract: json.contract,
      executeMsg: R.pathOr('', ['execute_msg'], json),
      coins: R.pathOr([], ['coins'], json).map((x) => ({
        denom: R.pathOr('', ['denom'], x),
        amount: R.pathOr(0, ['amount'], x),
      })),
    });
  }
}

export default MsgExecuteContract;
