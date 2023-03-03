/* eslint-disable camelcase */
import * as R from 'ramda';
import { Categories } from '../types';

class MsgIssue {
  public category: Categories;
  public type: string;
  public issuer: string;
  public symbol: string;
  public subunit: string;
  public features: any[];
  public burn_rate: string;
  public precision: number;
  public description: string;
  public initial_amount: string;
  public send_commission_rate: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'asset';
    this.type = R.pathOr('', ['type'], payload);
    this.issuer = R.pathOr('', ['issuer'], payload);
    this.symbol = R.pathOr('', ['symbol'], payload);
    this.subunit = R.pathOr('', ['subunit'], payload);
    this.features = R.pathOr([], ['features'], payload);
    this.burn_rate = R.pathOr('', ['burn_rate'], payload);
    this.precision = R.pathOr(0, ['precision'], payload);
    this.description = R.pathOr('', ['description'], payload);
    this.initial_amount = R.pathOr('', ['initial_amount'], payload);
    this.send_commission_rate = R.pathOr('', ['send_commission_rate'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: any) {
    return new MsgIssue({
      category: 'asset',
      json,
      type: R.pathOr('', ['@type'], json),
      issuer: R.pathOr('', ['issuer'], json),
      symbol: R.pathOr('', ['symbol'], json),
      subunit: R.pathOr('', ['subunit'], json),
      features: R.pathOr([], ['features'], json),
      burn_rate: R.pathOr('', ['burn_rate'], json),
      precision: R.pathOr(0, ['precision'], json),
      description: R.pathOr('', ['description'], json),
      initial_amount: R.pathOr('', ['initial_amount'], json),
      send_commission_rate: R.pathOr('', ['send_commission_rate'], json),
    });
  }
}

export default MsgIssue;
