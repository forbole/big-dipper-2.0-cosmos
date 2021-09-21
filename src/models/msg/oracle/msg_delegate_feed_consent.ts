import { Categories } from '../types';

class MsgDelegateFeedConsent {
  public category: Categories;
  public type: string;
  public json: any;
  public operator: string;
  public delegate: string;

  constructor(payload: any) {
    this.category = 'oracle';
    this.type = payload.type;
    this.json = payload.json;
    this.operator = payload.operator;
    this.delegate = payload.delegate;
  }

  static fromJson(json: any) {
    return new MsgDelegateFeedConsent({
      json,
      type: json['@type'],
      operator: json.operator,
      delegate: json.delegate,
    });
  }
}

export default MsgDelegateFeedConsent;
