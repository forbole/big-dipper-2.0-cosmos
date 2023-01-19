import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgDeleteProfile {
  public category: Categories;

  public type: string;

  public creator: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'profiles';
    this.type = R.pathOr('', ['type'], payload);
    this.creator = R.pathOr('', ['creator'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgDeleteProfile {
    return {
      category: 'profiles',
      type: R.pathOr('', ['@type'], json),
      creator: R.pathOr('', ['creator'], json),
      json,
    };
  }
}

export default MsgDeleteProfile;
