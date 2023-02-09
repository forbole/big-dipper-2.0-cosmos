import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgEditSubspace {
  public category: Categories;

  public type: string;

  public json: object;

  public signer: string;

  public description: string;

  constructor(payload: object) {
    this.category = 'subspaces';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.description = R.pathOr('', ['description'], payload);
  }

  static fromJson(json: object): MsgEditSubspace {
    return {
      category: 'subspaces',
      type: R.pathOr('', ['@type'], json),
      json,
      signer: R.pathOr('', ['signer'], json),
      description: R.pathOr('', ['description'], json),
    };
  }
}

export default MsgEditSubspace;
