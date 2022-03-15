import * as R from 'ramda';
import { Categories } from '../types';

class MsgCreateClawbackVestingAccount {
  public category: Categories;
  public type: string;
  public json: any;
  public fromAddress: string;
  public toAddress: string;

  constructor(payload: any) {
    this.category = 'vesting';
    this.type = payload.type;
    this.json = payload.json;
    this.fromAddress = payload.fromAddress;
    this.toAddress = payload.toAddress;
  }

  static fromJson(json: any) {
    return new MsgCreateClawbackVestingAccount({
      json,
      type: json['@type'],
      fromAddress: R.pathOr('', ['from_address'], json),
      toAddress: R.pathOr('', ['to_address'], json),
    });
  }
}

export default MsgCreateClawbackVestingAccount;
