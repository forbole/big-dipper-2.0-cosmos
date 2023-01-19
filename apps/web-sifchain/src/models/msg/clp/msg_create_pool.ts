import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreatePool {
  public category: Categories;

  public type: string;

  public json: object;

  public signer: string;

  public externalAsset: {
    symbol: string;
  };

  public nativeAssetAmount: string;

  public externalAssetAmount: string;

  constructor(payload: object) {
    this.category = 'clp';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.externalAsset = R.pathOr({ symbol: '' }, ['externalAsset'], payload);
    this.nativeAssetAmount = R.pathOr('', ['nativeAssetAmount'], payload);
    this.externalAssetAmount = R.pathOr('', ['externalAssetAmount'], payload);
  }

  static fromJson(json: object): MsgCreatePool {
    return {
      category: 'clp',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      externalAsset: {
        symbol: R.pathOr('', ['external_asset', 'symbol'], json),
      },
      nativeAssetAmount: R.pathOr('', ['native_asset_amount'], json),
      externalAssetAmount: R.pathOr('', ['external_asset_amount'], json),
    };
  }
}

export default MsgCreatePool;
