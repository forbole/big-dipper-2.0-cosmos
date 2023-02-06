import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreateClient {
  public category: Categories;

  public type: string;

  public signer: string;

  public chainId: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'ibc';
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.chainId = R.pathOr('', ['chainId'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgCreateClient {
    return {
      category: 'ibc',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      chainId: R.pathOr('', ['client_state', 'chain_id'], json),
    };
  }
}

export default MsgCreateClient;
