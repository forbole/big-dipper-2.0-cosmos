import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgRemovePostAttachment {
  public category: Categories;

  public type: string;

  public json: object;

  public editor: string;

  constructor(payload: object) {
    this.category = 'posts';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.editor = R.pathOr('', ['editor'], payload);
  }

  static fromJson(json: object) {
    return {
      category: 'posts',
      type: R.pathOr('', ['@type'], json),
      json,
      editor: R.pathOr('', ['editor'], json),
    };
  }
}

export default MsgRemovePostAttachment;
