import * as R from 'ramda';
import type { Categories } from '../types';

class MsgRemoveLiquidity {
  public category: Categories;
  public type: string;
  public json: any;
  public signer: string;
  public externalAsset: {
    symbol: string;
  };

  constructor(payload: any) {
    this.category = 'clp';
    this.json = payload.json;
    this.type = payload.type;
    this.signer = payload.signer;
    this.externalAsset = payload.externalAsset;
  }

  static fromJson(json: any): MsgRemoveLiquidity {
    return {
      category: 'clp',
      json,
      type: json['@type'],
      signer: json.signer,
      externalAsset: {
        symbol: R.pathOr('', ['external_asset', 'symbol'], json),
      },
    };
  }
}

export default MsgRemoveLiquidity;
