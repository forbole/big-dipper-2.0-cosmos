import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgLinkChainAccount {
  public category: Categories;

  public type: string;

  public signer: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'profiles';
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgLinkChainAccount {
    return {
      category: 'profiles',
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      json,
    };
  }
}

export default MsgLinkChainAccount;
