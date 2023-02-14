import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUnlinkChainAccount {
  public category: Categories;

  public type: string;

  public json: object;

  public owner: string;

  public chainName: string;

  public target: string;

  constructor(payload: object) {
    this.category = 'profiles';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.owner = R.pathOr('', ['owner'], payload);
    this.chainName = R.pathOr('', ['chainName'], payload);
    this.target = R.pathOr('', ['target'], payload);
  }

  static fromJson(json: object): MsgUnlinkChainAccount {
    return {
      category: 'profiles',
      json,
      type: R.pathOr('', ['@type'], json),
      owner: R.pathOr('', ['owner'], json),
      chainName: R.pathOr('', ['chain_name'], json),
      target: R.pathOr('', ['target'], json),
    };
  }
}

export default MsgUnlinkChainAccount;
