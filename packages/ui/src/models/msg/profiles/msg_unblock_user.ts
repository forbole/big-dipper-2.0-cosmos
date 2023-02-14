import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUnblockUser {
  public category: Categories;

  public type: string;

  public json: object;

  public reason?: string;

  public blocked: string;

  public blocker: string;

  public subspace: string;

  constructor(payload: object) {
    this.category = 'profiles';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.blocked = R.pathOr('', ['blocked'], payload);
    this.blocker = R.pathOr('', ['blocker'], payload);
    this.subspace = R.pathOr('', ['subspace'], payload);
  }

  static fromJson(json: object): MsgUnblockUser {
    return {
      category: 'profiles',
      json,
      type: R.pathOr('', ['@type'], json),
      blocked: R.pathOr('', ['blocked'], json),
      blocker: R.pathOr('', ['blocker'], json),
      subspace: R.pathOr('', ['subspace'], json),
    };
  }
}

export default MsgUnblockUser;
