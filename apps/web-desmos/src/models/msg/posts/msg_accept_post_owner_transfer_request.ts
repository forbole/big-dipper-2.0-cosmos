import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgAcceptPostOwnerTransferRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public receiver: string;

  public post_id: string;

  public subspace_id: string;

  constructor(payload: object) {
    this.category = 'posts';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.receiver  = R.pathOr('', ['receiver'], payload);
    this.post_id = R.pathOr('', ['post_id'], payload);
    this.subspace_id = R.pathOr('', ['subspace_id'], payload);
  }

  static fromJson(json: object) {
    return {
      category: 'posts',
      type: R.pathOr('', ['@type'], json),
      json,
      receiver: R.pathOr('', ['receiver'], json),
      post_id: R.pathOr('', ['post_id'], json),
      subspace_id: R.pathOr('', ['subspace_id'], json),
    };
  }
}

export default MsgAcceptPostOwnerTransferRequest;
