import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgEditSection {
  public category: Categories;

  public type: string;

  public json: object;

  public editor: string;

  constructor(payload: object) {
    this.category = 'subspaces';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.editor = R.pathOr('', ['editor'], payload);
  }

  static fromJson(json: object): MsgEditSection {
    return {
      category: 'subspaces',
      json,
      type: R.pathOr('', ['@type'], json),
      editor: R.pathOr('', ['editor'], json),
    };
  }
}

export default MsgEditSection;
