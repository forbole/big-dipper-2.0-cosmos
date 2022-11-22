import * as R from 'ramda';
import type { Categories } from '../types';

class MsgClawback {
  public category: Categories;

  public type: string;

  public json: any;

  public accountAddress: string;

  public destAddress: string;

  constructor(payload: any) {
    this.category = 'vesting';
    this.type = payload.type;
    this.json = payload.json;
    this.accountAddress = payload.accountAddress;
    this.destAddress = payload.destAddress;
  }

  static fromJson(json: any): MsgClawback {
    return {
      category: 'vesting',
      json,
      type: json['@type'],
      accountAddress: R.pathOr('', ['account_address'], json),
      destAddress: R.pathOr('', ['dest_address'], json),
    };
  }
}

export default MsgClawback;
