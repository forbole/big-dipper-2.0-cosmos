import { Categories } from '../types';

class MsgAggregateExchangeRatePrevote {
  public category: Categories;
  public type: string;
  public json: any;
  public hash: string;
  public feeder: string;
  public validator: string;

  constructor(payload: any) {
    this.category = 'oracle';
    this.type = payload.type;
    this.json = payload.json;
    this.hash = payload.hash;
    this.feeder = payload.feeder;
    this.validator = payload.validator;
  }

  static fromJson(json: any) {
    return new MsgAggregateExchangeRatePrevote({
      json,
      type: json['@type'],
      hash: json.hash,
      feeder: json.feeder,
      validator: json.validator,
    });
  }
}

export default MsgAggregateExchangeRatePrevote;
