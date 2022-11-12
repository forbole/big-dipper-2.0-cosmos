// import * as R from 'ramda';
import { Categories } from '../types';

class MsgCreateDataSource {
  public category: Categories;
  public type: string;
  public json: any;
  public name: string;
  // public description: string;
  // public executable: JSON;
  // public fee: MsgCoin[];
  // public treasury: string;
  // public owner: string;
  public sender: string;

  constructor(payload: any) {
    this.category = 'oracle';
    this.json = payload.json;
    this.type = payload.type;
    this.name = payload.name;
    // this.description = payload.description;
    // this.executable = payload.executable;
    // this.fee = payload.fee;
    // this.treasury = payload.treasury;
    // this.owner = payload.owner;
    this.sender = payload.sender;
  }

  static fromJson(json: any) {
    return new MsgCreateDataSource({
      json,
      type: json['@type'],
      name: json.name,
      // description: json.description,
      // executable: R.pathOr('', ['executable'], json),
      // fee: R.pathOr([], ['fee'], json).map((x: any) => ({
      //   denom: x.denom,
      //   amount: R.pathOr(0, ['amount'], x),
      // })),
      // treasury: json.treasury,
      // owner: json.owner,
      sender: json.sender,
    });
  }
}

export default MsgCreateDataSource;
