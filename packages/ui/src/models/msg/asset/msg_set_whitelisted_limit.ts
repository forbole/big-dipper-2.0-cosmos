/* eslint-disable camelcase */
import * as R from 'ramda';
import { Categories } from '../types';

class MsgSetWhitelistedLimit {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;
  public account: string;
  public coin: MsgCoin;

  constructor(payload: any) {
    this.category = 'asset';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload.json);
    this.account = R.pathOr('', ['account'], payload.json);
    this.coin = R.pathOr({ denom: '', amount: '0' }, ['coin'], payload.json);
  }

  static fromJson(json: any) {
    return new MsgSetWhitelistedLimit({
      category: 'asset',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      account: R.pathOr('', ['account'], json),
      coin: R.pathOr({ denom: '', amount: '0' }, ['coin'], json),
    });
  }
}

export default MsgSetWhitelistedLimit;
