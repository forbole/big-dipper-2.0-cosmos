import * as R from 'ramda';
import type { Categories } from '../types';

class MsgIssueFanToken {
  public category: Categories;
  public type: string;
  public json: any;
  public owner: string;
  public name: string;
  public maxSupply: string;

  constructor(payload: any) {
    this.category = 'fantoken';
    this.type = payload.type;
    this.json = payload.json;
    this.owner = payload.owner;
    this.name = payload.name;
    this.maxSupply = payload.maxSupply;
  }

  static fromJson(json: any): MsgIssueFanToken {
    return {
      category: 'fantoken',
      json,
      type: json['@type'],
      owner: json.owner,
      name: json.name,
      maxSupply: R.pathOr('', ['max_supply'], json),
    };
  }
}

export default MsgIssueFanToken;
