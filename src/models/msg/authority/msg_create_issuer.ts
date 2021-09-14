import * as R from 'ramda';
import { Categories } from '../types';

class MsgCreateIssuer {
    public category: Categories;
    public type: string;
    public json: any;

    public authority: string;
    public issuer: string;
    public denominations: array;

    constructor(payload: any) {
      this.category = 'authority';
      this.type = payload.type;
      this.json = payload.json;
      this.authority = payload.authority;
      this.issuer = payload.issuer;
      this.denominations = payload.denominations;
    }

    static fromJson(json: any) {
      return new MsgCreateIssuer({
        json,
        type: json['@type'],
        authority: json.authority,
        issuer: R.pathOr('', ['issuer'], json),
        denominations: R.pathOr(0, ['denominations'], json),
      });
    }
}

export default MsgCreateIssuer;
