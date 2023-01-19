import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgMintTokens {
  public category: Categories;

  public type: string;

  public json: object;

  public liquidityProvider: string;

  public amount: MsgCoin[];

  constructor(payload: object) {
    this.category = 'liquidityProvider';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.liquidityProvider = R.pathOr('', ['liquidityProvider'], payload);
    this.amount = R.pathOr<MsgMintTokens['amount']>([], ['amount'], payload);
  }

  static fromJson(json: object): MsgMintTokens {
    return {
      category: 'liquidityProvider',
      json,
      type: R.pathOr('', ['@type'], json),
      liquidityProvider: R.pathOr('', ['liquidity_provider'], json),
      amount: R.pathOr<MsgMintTokens['amount']>([], ['amount'], json).map((x) => ({
        denom: x?.denom ?? '',
        amount: x?.amount ?? '0',
      })),
    };
  }
}

export default MsgMintTokens;
