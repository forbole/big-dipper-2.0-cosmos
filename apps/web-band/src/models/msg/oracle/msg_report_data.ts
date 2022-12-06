import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgReportData {
  public category: Categories;

  public type: string;

  public json: object;

  public requestId: number;

  // public rawReports: Array<{
  //   externalId: number;
  //   exitCode: number;
  //   data: object;
  // }>;
  public validator: string;

  constructor(payload: object) {
    this.category = 'oracle';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.requestId = R.pathOr(0, ['requestId'], payload);
    // this.rawReports = R.pathOr('', ['rawReports'], payload);
    this.validator = R.pathOr('', ['validator'], payload);
  }

  static fromJson(json: object): MsgReportData {
    return {
      category: 'oracle',
      json,
      type: R.pathOr('', ['@type'], json),
      requestId: R.pathOr(0, ['request_id'], json),
      // rawReports: R.pathOr([], ['raw_reports'], json),
      validator: R.pathOr('', ['validator'], json),
    };
  }
}

export default MsgReportData;
