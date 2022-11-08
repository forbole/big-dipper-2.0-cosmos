import * as R from 'ramda';
import { Categories } from '../types';

class MsgUpdateCethReceiverAccount {
  public category: Categories;
  public type: string;
  public json: any;
  public cosmosSender: string;
  public cethReceiverAccount: string;

  constructor(payload: any) {
    this.category = 'ethbridge';
    this.type = payload.type;
    this.json = payload.json;
    this.cosmosSender = payload.cosmosSender;
    this.cethReceiverAccount = payload.cethReceiverAccount;
  }

  static fromJson(json: any) {
    return new MsgUpdateCethReceiverAccount({
      json,
      type: json['@type'],
      cosmosSender: R.pathOr('', ['cosmos_sender'], json),
      cethReceiverAccount: R.pathOr('', ['ceth_receiver_account'], json),
    });
  }
}

export default MsgUpdateCethReceiverAccount;
