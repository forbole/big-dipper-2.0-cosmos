import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgAcknowledgement {
  public category: Categories;

  public type: string;

  public signer: string;

  public sourceChannel: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'ibc';
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.sourceChannel = R.pathOr('', ['sourceChannel'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgAcknowledgement {
    return {
      category: 'ibc',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      sourceChannel: R.pathOr('', ['packet', 'source_channel'], json),
    };
  }
}

export default MsgAcknowledgement;
