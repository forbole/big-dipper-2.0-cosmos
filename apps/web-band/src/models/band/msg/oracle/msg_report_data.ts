import * as R from 'ramda';
import type { Categories } from '../types';

class MsgReportData {
  public category: Categories;
  public type: string;
  public json: any;
  public requestId: number;
  // public rawReports: {
  //   externalId: number;
  //   exitCode: number;
  //   data: JSON;
  // }[];
  public validator: string;

  constructor(payload: any) {
    this.category = 'oracle';
    this.json = payload.json;
    this.type = payload.type;
    this.requestId = payload.requestId;
    // this.rawReports = payload.rawReports;
    this.validator = payload.validator;
  }

  static fromJson(json: any): MsgReportData {
    return {
      category: 'oracle',
      json,
      type: json['@type'],
      requestId: R.pathOr(0, ['request_id'], json),
      // rawReports: R.pathOr([], ['raw_reports'], json),
      validator: json.validator,
    };
  }
}

export default MsgReportData;
