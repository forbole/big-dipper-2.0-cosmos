import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgTransfer {
  public category: Categories;

  public type: string;

  public sender: string;

  public receiver: string;

  public token: MsgCoin;

  public sourceChannel: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'ibc-transfer';
    this.type = R.pathOr('', ['type'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.receiver = R.pathOr('', ['receiver'], payload);
    this.token = R.pathOr({ denom: '', amount: '0' }, ['token'], payload);
    this.sourceChannel = R.pathOr('', ['sourceChannel'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgTransfer {
    return {
      category: 'ibc-transfer',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['sender'], json),
      receiver: R.pathOr('', ['receiver'], json),
      token: {
        denom: R.pathOr('', ['token', 'denom'], json),
        amount: R.pathOr('0', ['token', 'amount'], json),
      },
      sourceChannel: R.pathOr('', ['source_channel'], json),
    };
  }
}

export default MsgTransfer;
