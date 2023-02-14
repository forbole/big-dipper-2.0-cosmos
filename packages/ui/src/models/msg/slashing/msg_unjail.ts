import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUnjail {
  public category: Categories;

  public type: string;

  public validatorAddress: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'slashing';
    this.type = R.pathOr('', ['type'], payload);
    this.validatorAddress = R.pathOr('', ['validatorAddress'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgUnjail {
    return {
      category: 'slashing',
      json,
      type: R.pathOr('', ['@type'], json),
      validatorAddress: R.pathOr('', ['validator_addr'], json),
    };
  }
}

export default MsgUnjail;
