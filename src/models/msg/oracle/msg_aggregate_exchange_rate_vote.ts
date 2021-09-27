import * as R from 'ramda';
import { Categories } from '../types';

class MsgAggregateExchangeRateVote {
  public category: Categories;
  public type: string;
  public json: any;
  public salt: string;
  public exchangeRates: string;
  public feeder: string;
  public validator: string;

  constructor(payload: any) {
    this.category = 'oracle';
    this.type = payload.type;
    this.json = payload.json;
    this.salt = payload.salt;
    this.exchangeRates = payload.exchangeRates;
    this.feeder = payload.feeder;
    this.validator = payload.validator;
  }

  static fromJson(json: any) {
    return new MsgAggregateExchangeRateVote({
      json,
      type: json['@type'],
      salt: json.salt,
      exchangeRates: R.pathOr('', ['exchange_rates'], json),
      feeder: json.feeder,
      validator: json.validator,
    });
  }
}

export default MsgAggregateExchangeRateVote;
