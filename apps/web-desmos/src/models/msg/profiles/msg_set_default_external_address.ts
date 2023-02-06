import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgSetDefaultExternalAddress {
  public category: Categories;

  public type: string;

  public json: object;

  public chainName: string;

  public target: string;

  public signer: string;

  constructor(payload: object) {
    this.category = 'profiles';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.chainName = R.pathOr('', ['chainName'], payload);
    this.target = R.pathOr('', ['target'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
  }

  static fromJson(json: object): MsgSetDefaultExternalAddress {
    return {
      category: 'profiles',
      json,
      type: R.pathOr('', ['@type'], json),
      chainName: R.pathOr('', ['chain_name'], json),
      target: R.pathOr('', ['target'], json),
      signer: R.pathOr('', ['signer'], json),
    };
  }
}

export default MsgSetDefaultExternalAddress;
