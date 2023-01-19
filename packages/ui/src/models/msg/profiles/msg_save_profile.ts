import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgSaveProfile {
  public category: Categories;

  public type: string;

  public json: object;

  public creator: string;

  constructor(payload: object) {
    this.category = 'profiles';
    this.type = R.pathOr('', ['type'], payload);
    this.creator = R.pathOr('', ['creator'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgSaveProfile {
    return {
      category: 'profiles',
      type: R.pathOr('', ['@type'], json),
      creator: R.pathOr('', ['creator'], json),
      json,
    };
  }
}

export default MsgSaveProfile;
