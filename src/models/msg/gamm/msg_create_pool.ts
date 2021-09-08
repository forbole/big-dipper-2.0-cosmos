import * as R from 'ramda';
import numeral from 'numeral';
import { Categories } from '../types';

class MsgCreatePool {
    public category: Categories;
    public type: string;
    public sender: string;
    public poolParams: {
      exitFee: number;
      swapFee: number;
    };
    public poolAssets: {
      token: {
        denom: string;
        amount: number;
      };
      weight: number;
    }[];
    public futurePoolGovernor: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'gamm';
      this.type = payload.type;
      this.json = payload.json;
      this.sender = payload.sender;
      this.poolParams = payload.poolParams;
      this.poolAssets = payload.poolAssets;
      this.futurePoolGovernor = payload.futurePoolGovernor;
    }

    static fromJson(json: any) {
      return new MsgCreatePool({
        json,
        type: json['@type'],
        sender: json.sender,
        poolParams: {
          exitFee: numeral(R.pathOr(0, ['poolParams', 'exitFee'], json)).value(),
          swapFee: numeral(R.pathOr(0, ['poolParams', 'swapFee'], json)).value(),
        },
        poolAssets: json?.poolAssets.map((x) => {
          return ({
            token: {
              denom: R.pathOr('', ['token', 'denom'], x),
              amount: numeral(R.pathOr('0', ['token', 'amount'], x)).value(),
            },
            weight: numeral(R.pathOr(0, ['weight'], x)).value(),
          });
        }),
        futurePoolGovernor: R.pathOr('', ['future_pool_governor'], json),
      });
    }
}

export default MsgCreatePool;
