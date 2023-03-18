/* eslint-disable camelcase */
import * as R from 'ramda';
import { Categories } from '../types';

class MsgUnfreeze {
  public category: Categories;
  public type: string;
  public json: any;
  public account: string;
  public sender: string;
  public coin: MsgCoin;

  constructor(payload: any) {
    this.category = 'asset';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.account = R.pathOr('', ['account'], payload.json);
    this.sender = R.pathOr('', ['sender'], payload.json);
    this.coin = R.pathOr({ denom: '', amount: '0' }, ['coin'], payload.json);
  }

  static fromJson(json: any) {
    return new MsgUnfreeze({
      category: 'asset',
      json,
      type: R.pathOr('', ['@type'], json),
      account: R.pathOr('', ['account'], json),
      sender: R.pathOr('', ['sender'], json),
      coin: R.pathOr({ denom: '', amount: '0' }, ['coin'], json),
    });
  }
}

export default MsgUnfreeze;
