import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgUpdateCethReceiverAccount {
  public category: Categories;

  public type: string;

  public json: object;

  public cosmosSender: string;

  public cethReceiverAccount: string;

  constructor(payload: object) {
    this.category = 'ethbridge';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.cosmosSender = R.pathOr('', ['cosmosSender'], payload);
    this.cethReceiverAccount = R.pathOr('', ['cethReceiverAccount'], payload);
  }

  static fromJson(json: object): MsgUpdateCethReceiverAccount {
    return {
      category: 'ethbridge',
      json,
      type: R.pathOr('', ['@type'], json),
      cosmosSender: R.pathOr('', ['cosmos_sender'], json),
      cethReceiverAccount: R.pathOr('', ['ceth_receiver_account'], json),
    };
  }
}

export default MsgUpdateCethReceiverAccount;
