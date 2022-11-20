import * as R from 'ramda';
import type { Categories } from '../types';

class MsgIssueDenom {
  public category: Categories;

  public type: string;

  public json: any;

  public creators: string[];

  constructor(payload: any) {
    this.category = 'nft';
    this.type = payload.type;
    this.json = payload.json;
    this.creators = payload.creators;
  }

  static fromJson(json: any): MsgIssueDenom {
    return {
      category: 'nft',
      json,
      type: json['@type'],
      creators: R.pathOr([], ['creators'], json),
    };
  }
}

export default MsgIssueDenom;
