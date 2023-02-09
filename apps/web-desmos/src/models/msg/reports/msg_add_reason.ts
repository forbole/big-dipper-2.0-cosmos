import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgAddReason {
  public category: Categories;

  public type: string;

  public json: object;

  public signer: string;

  public title: string;

  constructor(payload: object) {
    this.category = 'reports';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.title = R.pathOr('', ['title'], payload);
  }

  static fromJson(json: object): MsgAddReason {
    return {
      category: 'reports',
      type: R.pathOr('', ['@type'], json),
      json,
      signer: R.pathOr('', ['signer'], json),
      title: R.pathOr('', ['title'], json),
    };
  }
}

export default MsgAddReason;
