import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgVerifyInvariant {
  public category: Categories;

  public type: string;

  public sender: string;

  public invariantModuleName: string;

  public invariantRoute: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'crisis';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.invariantModuleName = R.pathOr('', ['invariantModuleName'], payload);
    this.invariantRoute = R.pathOr('', ['invariantRoute'], payload);
  }

  static fromJson(json: object): MsgVerifyInvariant {
    return {
      category: 'crisis',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      invariantModuleName: R.pathOr('', ['invariantModuleName'], json),
      invariantRoute: R.pathOr('', ['invariantRoute'], json),
    };
  }
}

export default MsgVerifyInvariant;
