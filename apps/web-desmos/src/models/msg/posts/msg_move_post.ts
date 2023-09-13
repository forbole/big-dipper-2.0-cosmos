import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgMovePost {
  public category: Categories;

  public type: string;

  public json: object;

  public owner: string;

  public subspace_id: string;

  public post_id: string;

  public target_subspace_id: string;

  constructor(payload: object) {
    this.category = 'posts';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.owner = R.pathOr('', ['owner'], payload);
    this.subspace_id  = R.pathOr('', ['subspace_id'], payload);
    this.post_id = R.pathOr('', ['post_id'], payload);
    this.target_subspace_id = R.pathOr('', ['target_subspace_id'], payload);
  }

  static fromJson(json: object) {
    return {
      category: 'posts',
      type: R.pathOr('', ['@type'], json),
      json,
      owner: R.pathOr('', ['owner'], json),
      subspace_id: R.pathOr('', ['subspace_id'], json),
      post_id: R.pathOr('', ['post_id'], json),
      target_subspace_id: R.pathOr('', ['target_subspace_id'], json),
    };
  }
}

export default MsgMovePost;
