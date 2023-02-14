import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgConnectionOpenAck {
  public category: Categories;

  public type: string;

  public signer: string;

  public connectionId: string;

  public counterpartyConnectionId: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'ibc';
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.connectionId = R.pathOr('', ['connectionId'], payload);
    this.counterpartyConnectionId = R.pathOr('', ['counterpartyConnectionId'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgConnectionOpenAck {
    return {
      category: 'ibc',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      connectionId: R.pathOr('', ['connection_id'], json),
      counterpartyConnectionId: R.pathOr('', ['counterparty_connection_id'], json),
    };
  }
}

export default MsgConnectionOpenAck;
