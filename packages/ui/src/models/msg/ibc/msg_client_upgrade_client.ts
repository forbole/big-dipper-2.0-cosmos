import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUpgradeClient {
  public category: Categories;

  public type: string;

  public signer: string;

  public clientId: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'ibc';
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.clientId = R.pathOr('', ['clientId'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgUpgradeClient {
    return {
      category: 'ibc',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      clientId: R.pathOr('', ['client_id'], json),
    };
  }
}

export default MsgUpgradeClient;
