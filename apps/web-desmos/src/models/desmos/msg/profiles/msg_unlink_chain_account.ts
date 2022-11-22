import * as R from 'ramda';
import type { Categories } from '../types';

class MsgUnlinkChainAccount {
  public category: Categories;

  public type: string;

  public json: any;

  public owner: string;

  public chainName: string;

  public target: string;

  constructor(payload: any) {
    this.category = 'profiles';
    this.type = payload.type;
    this.json = payload.json;
    this.owner = payload.owner;
    this.chainName = payload.chainName;
    this.target = payload.target;
  }

  static fromJson(json: any): MsgUnlinkChainAccount {
    return {
      category: 'profiles',
      json,
      type: json['@type'],
      owner: json.owner,
      chainName: R.pathOr('', ['chain_name'], json),
      target: json.target,
    };
  }
}

export default MsgUnlinkChainAccount;
