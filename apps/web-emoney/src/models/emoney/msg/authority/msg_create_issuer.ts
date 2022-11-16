import * as R from 'ramda';
import type { Categories } from '../types';

class MsgCreateIssuer {
  public category: Categories;
  public type: string;
  public json: any;
  public authority: string;
  public issuer: string;
  public denominations: string[];

  constructor(payload: any) {
    this.category = 'authority';
    this.type = payload.type;
    this.json = payload.json;
    this.authority = payload.authority;
    this.issuer = payload.issuer;
    this.denominations = payload.denominations;
  }

  static fromJson(json: any): MsgCreateIssuer {
    return {
      category: 'authority',
      json,
      type: json['@type'],
      authority: json.authority,
      issuer: R.pathOr('', ['issuer'], json),
      denominations: R.pathOr([], ['denominations'], json),
    };
  }
}

export default MsgCreateIssuer;
