import * as R from 'ramda';
import { Categories } from '../types';

class MsgCreatePool {
  public category: Categories;
  public type: string;
  public json: any;
  public signer: string;
  public externalAsset: {
    symbol: string;
  };
  public nativeAssetAmount: string;
  public externalAssetAmount: string;

  constructor(payload: any) {
    this.category = 'clp';
    this.json = payload.json;
    this.type = payload.type;
    this.signer = payload.signer;
    this.externalAsset = payload.externalAsset;
    this.nativeAssetAmount = payload.nativeAssetAmount;
    this.externalAssetAmount = payload.externalAssetAmount;
  }

  static fromJson(json: any): MsgCreatePool {
    return {
      category: 'clp',
      json,
      type: json['@type'],
      signer: json.signer,
      externalAsset: {
        symbol: R.pathOr('', ['external_asset', 'symbol'], json),
      },
      nativeAssetAmount: R.pathOr('', ['native_asset_amount'], json),
      externalAssetAmount: R.pathOr('', ['external_asset_amount'], json),
    };
  }
}

export default MsgCreatePool;
