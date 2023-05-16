import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgRemoveReporter {
  public category: Categories;

  public type: string;

  public json: object;

  public validatorAddress: string;

  public reporterAddress: string;

  constructor(payload: object) {
    this.category = 'oracle';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.validatorAddress = R.pathOr('', ['validatorAddress'], payload);
    this.reporterAddress = R.pathOr('', ['reporterAddress'], payload);
  }

  static fromJson(json: object): MsgRemoveReporter {
    return {
      category: 'oracle',
      json,
      type: R.pathOr('', ['@type'], json),
      validatorAddress: R.pathOr('', ['validatorAddress'], json),
      reporterAddress: R.pathOr('', ['reporterAddress'], json),
    };
  }
}

export default MsgRemoveReporter;
