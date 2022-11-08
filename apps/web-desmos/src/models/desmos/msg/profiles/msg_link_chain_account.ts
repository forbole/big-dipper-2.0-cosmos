import * as R from 'ramda';
import { Categories } from '../types';

class MsgLinkChainAccount {
  public category: Categories;
  public type: string;
  public json: any;
  public signer: string;
  public chainConfig: {
    name: string;
  };

  constructor(payload: any) {
    this.category = 'profiles';
    this.type = payload.type;
    this.json = payload.json;
    this.signer = payload.signer;
    this.chainConfig = payload.chainConfig;
  }

  static fromJson(json: any) {
    return new MsgLinkChainAccount({
      json,
      type: json['@type'],
      signer: json.signer,
      chainConfig: {
        name: R.pathOr('', ['chain_config', 'name'], json),
      },
    });
  }
}

export default MsgLinkChainAccount;
