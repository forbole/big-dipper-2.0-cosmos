import * as R from 'ramda';
import { Categories } from '../types';

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

  static fromJson(json: any) {
    return new MsgRemoveLiquidity({
      json,
      type: json['@type'],
      signer: json.signer,
      externalAsset: {
        symbol: R.pathOr('', ['external_asset', 'symbol'], json),
      },
    });
  }
}

export default MsgRemoveLiquidity;
