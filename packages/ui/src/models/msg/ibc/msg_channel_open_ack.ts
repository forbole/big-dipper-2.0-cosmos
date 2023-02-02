import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgChannelCloseInit {
  public category: Categories;

  public type: string;

  public signer: string;

  public channelId: string;

  public portId: string;

  public counterpartyChannelId: string;

  public counterpartyVersion: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'ibc';
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.channelId = R.pathOr('', ['channelId'], payload);
    this.portId = R.pathOr('', ['portId'], payload);
    this.counterpartyChannelId = R.pathOr('', ['counterpartyChannelId'], payload);
    this.counterpartyVersion = R.pathOr('', ['counterpartyVersion'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgChannelCloseInit {
    return {
      category: 'ibc',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      channelId: R.pathOr('', ['channel_id'], json),
      portId: R.pathOr('', ['port_id'], json),
      counterpartyChannelId: R.pathOr('', ['counterparty_channel_id'], json),
      counterpartyVersion: R.pathOr('', ['counterparty_version'], json),
    };
  }
}

export default MsgChannelCloseInit;
