import * as R from 'ramda';
import { chainConfig } from '@configs';

class GasPriceParams {
  public denom: string;
  public amount: number;

  constructor(payload: any) {
    this.denom = payload.denom;
    this.amount = payload.amount;
  }

  static fromJson(data: any) {
    return new GasPriceParams({
      denom: R.pathOr(chainConfig.primaryTokenUnit, ['denom'], data),
      amount: R.pathOr(0, ['amount'], data),
    });
  }
}

export default GasPriceParams;
