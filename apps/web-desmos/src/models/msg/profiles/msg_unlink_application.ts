import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUnlinkApplication {
  public category: Categories;

  public type: string;

  public json: object;

  public application: string;

  public username: string;

  public signer: string;

  constructor(payload: object) {
    this.category = 'profiles';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.application = R.pathOr('', ['application'], payload);
    this.username = R.pathOr('', ['username'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
  }

  static fromJson(json: object): MsgUnlinkApplication {
    return {
      category: 'profiles',
      json,
      type: R.pathOr('', ['@type'], json),
      application: R.pathOr('', ['application'], json),
      username: R.pathOr('', ['username'], json),
      signer: R.pathOr('', ['signer'], json),
    };
  }
}

export default MsgUnlinkApplication;
