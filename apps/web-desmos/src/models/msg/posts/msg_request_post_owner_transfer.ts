import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgRequestPostOwnerTransfer {
  public category: Categories;

  public type: string;

  public json: object;

  public sender: string;

  public receiver: string;

  public post_id: string;

  public subspace_id: string;

  constructor(payload: object) {
    this.category = 'posts';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.receiver  = R.pathOr('', ['receiver'], payload);
    this.post_id = R.pathOr('', ['post_id'], payload);
    this.subspace_id = R.pathOr('', ['subspace_id'], payload);
  }

  static fromJson(json: object) {
    return {
      category: 'posts',
      type: R.pathOr('', ['@type'], json),
      json,
      sender: R.pathOr('', ['sender'], json),
      receiver: R.pathOr('', ['receiver'], json),
      post_id: R.pathOr('', ['post_id'], json),
      subspace_id: R.pathOr('', ['subspace_id'], json),
    };
  }
}

export default MsgRequestPostOwnerTransfer;
