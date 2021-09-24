import * as R from 'ramda';
import { Categories } from '../types';

class MsgMintTokens {
    public category: Categories;
    public type: string;
    public json: any;
    public liquidityProvider: string;
    public amount: MsgCoin[];

    constructor(payload: any) {
      this.category = 'liquidityProvider';
      this.type = payload.type;
      this.json = payload.json;
      this.liquidityProvider = payload.liquidity_provider;
      this.amount = payload.amount;
    }

    static fromJson(json: any) {
      return new MsgMintTokens({
        json,
        type: json['@type'],
        liquidityProvider: json.liquidity_provider,
        amount: R.pathOr([], ['amount'], json).map((x) => {
          return ({
            denom: R.pathOr('', ['denom'], x),
            amount: R.pathOr('0', ['amount'], x),
          });
        }),
      });
    }
}

export default MsgMintTokens;
