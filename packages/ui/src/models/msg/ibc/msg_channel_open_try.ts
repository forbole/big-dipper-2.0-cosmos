import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgChannelOpenTry {
  public category: Categories;

  public type: string;

  public signer: string;

  public channel: string;

  public portId: string;

  public counterpartyVersion: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'ibc';
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.channel = R.pathOr('', ['channel'], payload);
    this.portId = R.pathOr('', ['portId'], payload);
    this.counterpartyVersion = R.pathOr('', ['counterpartyVersion'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgChannelOpenTry {
    return {
      category: 'ibc',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      channel: R.pathOr('', ['channel'], json),
      portId: R.pathOr('', ['port_id'], json),
      counterpartyVersion: R.pathOr('', ['counterparty_version'], json),
    };
  }
}

export default MsgChannelOpenTry;
