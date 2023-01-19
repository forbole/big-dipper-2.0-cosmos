import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgReceivePacket {
  public category: Categories;

  public type: string;

  public signer: string;

  public sourceChannel: string;

  public destinationChannel: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'ibc';
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.sourceChannel = R.pathOr('', ['sourceChannel'], payload);
    this.destinationChannel = R.pathOr('', ['destinationChannel'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgReceivePacket {
    return {
      category: 'ibc',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      sourceChannel: R.pathOr('', ['packet', 'source_channel'], json),
      destinationChannel: R.pathOr('', ['packet', 'destination_channel'], json),
    };
  }
}

export default MsgReceivePacket;
