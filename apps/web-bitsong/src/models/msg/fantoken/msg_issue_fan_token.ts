import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgIssueFanToken {
  public category: Categories;

  public type: string;

  public json: object;

  public owner: string;

  public name: string;

  public maxSupply: string;

  constructor(payload: object) {
    this.category = 'fantoken';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.owner = R.pathOr('', ['owner'], payload);
    this.name = R.pathOr('', ['name'], payload);
    this.maxSupply = R.pathOr('', ['maxSupply'], payload);
  }

  static fromJson(json: object): MsgIssueFanToken {
    return {
      category: 'fantoken',
      json,
      type: R.pathOr('', ['@type'], json),
      owner: R.pathOr('', ['owner'], json),
      name: R.pathOr('', ['name'], json),
      maxSupply: R.pathOr('', ['max_supply'], json),
    };
  }
}

export default MsgIssueFanToken;
