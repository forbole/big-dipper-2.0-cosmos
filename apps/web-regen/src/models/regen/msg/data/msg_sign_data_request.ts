import * as R from 'ramda';
import type { Categories } from '../types';

class MsgSignDataRequest {
  public category: Categories;
  public type: string;
  public json: any;
  public signers: string[];

  constructor(payload: any) {
    this.category = 'data';
    this.json = payload.json;
    this.type = payload.type;
    this.signers = payload.signers;
  }

  static fromJson(json: any): MsgSignDataRequest {
    return {
      category: 'data',
      json,
      type: json['@type'],
      signers: R.pathOr<string[]>([], ['signers'], json),
    };
  }
}

export default MsgSignDataRequest;
