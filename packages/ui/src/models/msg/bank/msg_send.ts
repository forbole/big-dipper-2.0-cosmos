import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgSend {
  public category: Categories;

  public type: string;

  public fromAddress: string;

  public toAddress: string;

  public amount: MsgCoin[];

  public json: object;

  constructor(payload: object) {
    this.category = 'bank';
    this.type = R.pathOr('', ['type'], payload);
    this.fromAddress = R.pathOr('', ['fromAddress'], payload);
    this.toAddress = R.pathOr('', ['toAddress'], payload);
    this.amount = R.pathOr<MsgSend['amount']>([], ['amount'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgSend {
    return {
      category: 'bank',
      json,
      type: R.pathOr('', ['@type'], json),
      fromAddress: R.pathOr('', ['from_address'], json),
      toAddress: R.pathOr('', ['to_address'], json),
      amount: R.pathOr<MsgSend['amount']>([], ['amount'], json).map((x) => ({
        denom: x?.denom ?? '',
        amount: x?.amount ?? '0',
      })),
    };
  }
}

export default MsgSend;
