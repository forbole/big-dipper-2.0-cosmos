import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgRegister {
  public category: Categories;

  public type: string;

  public json: any;

  public from: string;

  public entry: {
    denom: string;
  };

  constructor(payload: any) {
    this.category = 'tokenregistry';
    this.type = payload.type;
    this.json = payload.json;
    this.from = payload.from;
    this.entry = payload.entry;
  }

  static fromJson(json: any): MsgRegister {
    return {
      category: 'tokenregistry',
      json,
      type: json['@type'],
      from: json.from,
      entry: {
        denom: R.pathOr('', ['entry', 'denom'], json),
      },
    };
  }
}

export default MsgRegister;
