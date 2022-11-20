import * as R from 'ramda';
import type { Categories } from '../types';

class MsgBurnTokens {
  public category: Categories;

  public type: string;

  public json: any;

  public liquidityProvider: string;

  public amount: MsgCoin[];

  constructor(payload: any) {
    this.category = 'liquidityProvider';
    this.type = payload.type;
    this.json = payload.json;
    this.liquidityProvider = payload.liquidityProvider;
    this.amount = payload.amount;
  }

  static fromJson(json: any): MsgBurnTokens {
    return {
      category: 'liquidityProvider',
      json,
      type: json['@type'],
      liquidityProvider: json.liquidity_provider,
      amount: R.pathOr([], ['amount'], json).map((x) => {
        return {
          denom: R.pathOr('', ['denom'], x),
          amount: R.pathOr('0', ['amount'], x),
        };
      }),
    };
  }
}

export default MsgBurnTokens;
