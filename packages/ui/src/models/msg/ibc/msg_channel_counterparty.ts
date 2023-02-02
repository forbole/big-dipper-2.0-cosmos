import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCounterpartyChannel {
  public category: Categories;

  public type: string;

  public signer: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'ibc';
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgCounterpartyChannel {
    return {
      category: 'ibc',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
    };
  }
}

export default MsgCounterpartyChannel;
