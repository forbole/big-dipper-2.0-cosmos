import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgSetRegistry {
  public category: Categories;

  public type: string;

  public json: object;

  public from: string;

  public registry: {
    denom: string;
  }[];

  constructor(payload: object) {
    this.category = 'tokenregistry';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.from = R.pathOr('', ['from'], payload);
    this.registry = R.pathOr([], ['registry'], payload);
  }

  static fromJson(json: object): MsgSetRegistry {
    return {
      category: 'tokenregistry',
      json,
      type: R.pathOr('', ['@type'], json),
      from: R.pathOr('', ['from'], json),
      registry: R.pathOr([], ['registry'], json).map((x) => ({
        denom: R.pathOr('', ['denom'], x),
      })),
    };
  }
}

export default MsgSetRegistry;
