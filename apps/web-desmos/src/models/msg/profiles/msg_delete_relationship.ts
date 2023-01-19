import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgDeleteRelationship {
  public category: Categories;

  public type: string;

  public json: object;

  public sender: string;

  public receiver: string;

  public subspace: string;

  constructor(payload: object) {
    this.category = 'profiles';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.receiver = R.pathOr('', ['receiver'], payload);
    this.subspace = R.pathOr('', ['subspace'], payload);
  }

  static fromJson(json: object): MsgDeleteRelationship {
    return {
      category: 'profiles',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      receiver: R.pathOr('', ['receiver'], json),
      subspace: R.pathOr('', ['subspace'], json),
    };
  }
}

export default MsgDeleteRelationship;
