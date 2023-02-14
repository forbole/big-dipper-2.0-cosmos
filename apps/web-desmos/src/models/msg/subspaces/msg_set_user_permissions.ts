import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

class MsgSetUserPermissions {
  public category: Categories;

  public type: string;

  public json: PartialRecord<'user', string>;

  public signer: string;

  constructor(payload: object) {
    this.category = 'subspaces';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
  }

  static fromJson(json: object): MsgSetUserPermissions {
    return {
      category: 'subspaces',
      type: R.pathOr('', ['@type'], json),
      json,
      signer: R.pathOr('', ['signer'], json),
    };
  }
}

export default MsgSetUserPermissions;
