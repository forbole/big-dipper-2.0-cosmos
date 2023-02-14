import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUpdateGroupAccountDecisionPolicyRequest {
  public category: Categories;

  public type: string;

  public json: object;

  public admin: string;

  public address: string;

  constructor(payload: object) {
    this.category = 'group';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.admin = R.pathOr('', ['admin'], payload);
    this.address = R.pathOr('', ['address'], payload);
  }

  static fromJson(json: object): MsgUpdateGroupAccountDecisionPolicyRequest {
    return {
      category: 'group',
      json,
      type: R.pathOr('', ['@type'], json),
      admin: R.pathOr('', ['admin'], json),
      address: R.pathOr('', ['address'], json),
    };
  }
}

export default MsgUpdateGroupAccountDecisionPolicyRequest;
