import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgDeregister {
  public category: Categories;

  public type: string;

  public json: object;

  public from: string;

  public denom: string;

  constructor(payload: object) {
    this.category = 'tokenregistry';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.from = R.pathOr('', ['from'], payload);
    this.denom = R.pathOr('', ['denom'], payload);
  }

  static fromJson(json: object): MsgDeregister {
    return {
      category: 'tokenregistry',
      json,
      type: R.pathOr('', ['@type'], json),
      from: R.pathOr('', ['from'], json),
      denom: R.pathOr('', ['denom'], json),
    };
  }
}

export default MsgDeregister;
