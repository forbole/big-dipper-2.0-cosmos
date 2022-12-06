import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgRemoveLiquidity {
  public category: Categories;

  public type: string;

  public json: object;

  public signer: string;

  public externalAsset: {
    symbol: string;
  };

  constructor(payload: object) {
    this.category = 'clp';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.externalAsset = R.pathOr({ symbol: '' }, ['externalAsset'], payload);
  }

  static fromJson(json: object): MsgRemoveLiquidity {
    return {
      category: 'clp',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      externalAsset: {
        symbol: R.pathOr('', ['external_asset', 'symbol'], json),
      },
    };
  }
}

export default MsgRemoveLiquidity;
