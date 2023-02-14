import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreateProposalRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public address: string;

  constructor(payload: object) {
    this.category = 'group';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.address = R.pathOr('', ['address'], payload);
  }

  static fromJson(json: object): MsgCreateProposalRequest {
    return {
      category: 'group',
      json,
      type: R.pathOr('', ['@type'], json),
      address: R.pathOr('', ['address'], json),
    };
  }
}

export default MsgCreateProposalRequest;
