import * as R from 'ramda';
import { Categories } from '../types';

class MsgSignDataRequest {
  public category: Categories;
  public type: string;
  public json: any;
  public signers: string[];

  constructor(payload: any) {
    this.category = 'data';
    this.json = payload.json;
    this.type = payload.type;
    this.signers = payload.sender;
  }

  static fromJson(json: any) {
    return new MsgSignDataRequest({
      json,
      type: json['@type'],
      signer: R.pathOr([], ['signers'], json),
    });
  }
}

export default MsgSignDataRequest;
