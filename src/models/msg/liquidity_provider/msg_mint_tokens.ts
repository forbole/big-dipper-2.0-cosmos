import * as R from 'ramda';
import { Categories } from '../types';

class MsgMintTokens {
    public category: Categories;
    public type: string;
    public json: any;
    public liquidityProvider: string;
    public amount: MsgCoin;

    constructor(payload: any) {
      this.category = 'liquidityProvider';
      this.type = payload.type;
      this.json = payload.json;
      this.liquidityProvider = payload.liquidityProvider;
      this.amount = payload.amount;
    }

    static fromJson(json: any) {
      return new MsgMintTokens({
        json,
        type: json['@type'],
        liquidityProvider: json.liquidityProvider,
        amount: {
          denom: R.pathOr('', ['destination', 'denom'], json),
          amount: R.pathOr('', ['destination', 'amount'], json),
        },
      });
    }
}

export default MsgMintTokens;
