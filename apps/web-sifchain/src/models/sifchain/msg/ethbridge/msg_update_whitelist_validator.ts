import * as R from 'ramda';
import { Categories } from '../types';

class MsgUpdateWhitelistValidator {
  public category: Categories;
  public type: string;
  public json: any;
  public cosmosSender: string;

  constructor(payload: any) {
    this.category = 'ethbridge';
    this.type = payload.type;
    this.json = payload.json;
    this.cosmosSender = payload.cosmosSender;
  }

  static fromJson(json: any) {
    return new MsgUpdateWhitelistValidator({
      json,
      type: json['@type'],
      cosmosSender: R.pathOr('', ['cosmos_sender'], json),
    });
  }
}

export default MsgUpdateWhitelistValidator;
