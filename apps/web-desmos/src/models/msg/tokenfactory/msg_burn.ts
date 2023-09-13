import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgBurn {
  public category: Categories;

  public type: string;

  public json: object;

  public sender: string;

  public amount: MsgCoin[];

  public subspace_id: string;

  constructor(payload: object) {
    this.category = 'posts';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.amount = R.pathOr<MsgBurn['amount']>([], ['amount'], payload);
    this.subspace_id = R.pathOr('', ['subspace_id'], payload);
  }

  static fromJson(json: object) {
    return {
      category: 'posts',
      type: R.pathOr('', ['@type'], json),
      json,
      sender: R.pathOr('', ['sender'], json),
      amount: R.pathOr<MsgBurn['amount']>([], ['amount'], json).map((x) => ({
        denom: x?.denom ?? '',
        amount: x?.amount ?? '0',
      })),
      subspace_id: R.pathOr('', ['subspace_id'], json),
    };
  }
}

export default MsgBurn;
