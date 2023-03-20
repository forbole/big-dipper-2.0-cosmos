/* eslint-disable camelcase */
import * as R from 'ramda';
import { Categories } from '../types';

class MsgNftIssueClass {
  public category: Categories;
  public type: string;
  public json: any;
  public issuer: string;
  public symbol: string;
  public name: string;
  public description: string;
  public uri: string;
  public uri_hash: string;
  public data: any;
  public features: any[];
  public royalty_rate: string;

  constructor(payload: any) {
    this.category = 'asset';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.issuer = R.pathOr('', ['issuer'], payload);
    this.symbol = R.pathOr('', ['symbol'], payload);
    this.name = R.pathOr('', ['name'], payload);
    this.description = R.pathOr('', ['description'], payload);
    this.uri = R.pathOr('', ['uri'], payload);
    this.uri_hash = R.pathOr('', ['uri_hash'], payload);
    this.data = R.pathOr({}, ['data'], payload);
    this.features = R.pathOr([], ['features'], payload);
    this.royalty_rate = R.pathOr('', ['royalty_rate'], payload);
  }

  static fromJson(json: any) {
    return new MsgNftIssueClass({
      category: 'asset',
      json,
      type: R.pathOr('', ['@type'], json),
      issuer: R.pathOr('', ['issuer'], json),
      symbol: R.pathOr('', ['symbol'], json),
      name: R.pathOr('', ['name'], json),
      description: R.pathOr('', ['description'], json),
      uri: R.pathOr('', ['uri'], json),
      uri_hash: R.pathOr('', ['uri_hash'], json),
      data: R.pathOr({}, ['data'], json),
      features: R.pathOr([], ['features'], json),
      royalty_rate: R.pathOr('', ['royalty_rate'], json),
    });
  }
}

export default MsgNftIssueClass;
