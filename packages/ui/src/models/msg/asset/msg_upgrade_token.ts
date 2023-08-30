/* eslint-disable camelcase */
import * as R from 'ramda';
import { Categories } from '../types';

class MsgUpgradeToken {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;
  public denom: string;
  public ibc_enabled: boolean;

  constructor(payload: any) {
    this.category = 'asset';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload.json);
    this.denom = R.pathOr('', ['denom'], payload.json);
    this.ibc_enabled = R.pathOr(false, ['ibc_enabled'], payload.json);
  }

  static fromJson(json: any) {
    return new MsgUpgradeToken({
      category: 'asset',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      denom: R.pathOr('', ['denom'], json),
      ibc_enabled: R.pathOr(false, ['ibc_enabled'], json),
    });
  }
}

export default MsgUpgradeToken;
