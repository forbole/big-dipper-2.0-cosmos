import * as R from 'ramda';
import type { Categories } from '../types';

class MsgSetRegistry {
  public category: Categories;
  public type: string;
  public json: any;
  public from: string;
  public registry: {
    denom: string;
  }[];

  constructor(payload: any) {
    this.category = 'tokenregistry';
    this.type = payload.type;
    this.json = payload.json;
    this.from = payload.from;
    this.registry = payload.registry;
  }

  static fromJson(json: any): MsgSetRegistry {
    return {
      category: 'tokenregistry',
      json,
      type: json['@type'],
      from: json.from,
      registry: R.pathOr([], ['registry'], json).map((x) => ({
        denom: R.pathOr('', ['denom'], x),
      })),
    };
  }
}

export default MsgSetRegistry;
