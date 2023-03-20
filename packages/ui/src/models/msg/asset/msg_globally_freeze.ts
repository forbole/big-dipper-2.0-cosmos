/* eslint-disable camelcase */
import * as R from 'ramda';
import { Categories } from '../types';

class MsgGloballyFreeze {
  public category: Categories;
  public type: string;
  public json: any;
  public sender: string;
  public denom: string;

  constructor(payload: any) {
    this.category = 'asset';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload.json);
    this.denom = R.pathOr('', ['denom'], payload.json);
  }

  static fromJson(json: any) {
    return new MsgGloballyFreeze({
      category: 'asset',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      denom: R.pathOr('', ['denom'], json),
    });
  }
}

export default MsgGloballyFreeze;
