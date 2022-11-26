import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgRegister {
  public category: Categories;

  public type: string;

  public json: object;

  public from: string;

  public entry: {
    denom: string;
  };

  constructor(payload: object) {
    this.category = 'tokenregistry';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.from = R.pathOr('', ['from'], payload);
    this.entry = R.pathOr({ denom: '' }, ['entry'], payload);
  }

  static fromJson(json: object): MsgRegister {
    return {
      category: 'tokenregistry',
      json,
      type: R.pathOr('', ['@type'], json),
      from: R.pathOr('', ['from'], json),
      entry: R.pathOr({ denom: '' }, ['entry', 'denom'], json),
    };
  }
}

export default MsgRegister;
