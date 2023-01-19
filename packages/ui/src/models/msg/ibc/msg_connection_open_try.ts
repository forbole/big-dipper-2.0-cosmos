import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgConnectionOpenTry {
  public category: Categories;

  public type: string;

  public signer: string;

  public chainId: string;

  public clientId: string;

  public counterpartyClientId: string;

  public counterpartyConnectionId: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'ibc';
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.chainId = R.pathOr('', ['chainId'], payload);
    this.clientId = R.pathOr('', ['clientId'], payload);
    this.counterpartyClientId = R.pathOr('', ['counterpartyClientId'], payload);
    this.counterpartyConnectionId = R.pathOr('', ['counterpartyConnectionId'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgConnectionOpenTry {
    return {
      category: 'ibc',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      chainId: R.pathOr('', ['chain_id'], json),
      clientId: R.pathOr('', ['client_id'], json),
      counterpartyClientId: R.pathOr('', ['counterparty', 'client_id'], json),
      counterpartyConnectionId: R.pathOr('', ['counterparty', 'connection_id'], json),
    };
  }
}

export default MsgConnectionOpenTry;
