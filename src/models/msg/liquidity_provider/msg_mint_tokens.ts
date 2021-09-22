import * as R from 'ramda';
import { Categories } from '../types';

class MsgMintTokens {
    public category: Categories;
    public type: string;
    public json: any;
    public liquidityProvider: string;
    public amount: string;

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
        issuer: R.pathOr('', ['issuer'], json),
      });
    }
}

export default MsgMintTokens;
