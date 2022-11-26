import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreateIssuer {
  public category: Categories;

  public type: string;

  public json: object;

  public authority: string;

  public issuer: string;

  public denominations: string[];

  constructor(payload: object) {
    this.category = 'authority';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.authority = R.pathOr('', ['authority'], payload);
    this.issuer = R.pathOr('', ['issuer'], payload);
    this.denominations = R.pathOr([], ['denominations'], payload);
  }

  static fromJson(json: object): MsgCreateIssuer {
    return {
      category: 'authority',
      json,
      type: R.pathOr('', ['@type'], json),
      authority: R.pathOr('', ['authority'], json),
      issuer: R.pathOr('', ['issuer'], json),
      denominations: R.pathOr([], ['denominations'], json),
    };
  }
}

export default MsgCreateIssuer;
