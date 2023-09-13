import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreatePost {
  public category: Categories;

  public type: string;

  public json: object;

  public author: string;

  constructor(payload: object) {
    this.category = 'posts';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.author = R.pathOr('', ['author'], payload);
  }

  static fromJson(json: object): MsgCreatePost {
    return {
      category: 'posts',
      json,
      type: R.pathOr('', ['@type'], json),
      author: R.pathOr('', ['author'], json),
    };
  }
}

export default MsgCreatePost;
