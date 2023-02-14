import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgLinkChainAccount {
  public category: Categories;

  public type: string;

  public json: object;

  public signer: string;

  public chainConfig: {
    name: string;
  };

  constructor(payload: object) {
    this.category = 'profiles';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.chainConfig = R.pathOr({ name: '' }, ['chainConfig'], payload);
  }

  static fromJson(json: object): MsgLinkChainAccount {
    return {
      category: 'profiles',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      chainConfig: R.pathOr({ name: '' }, ['chain_config', 'name'], json),
    };
  }
}

export default MsgLinkChainAccount;
