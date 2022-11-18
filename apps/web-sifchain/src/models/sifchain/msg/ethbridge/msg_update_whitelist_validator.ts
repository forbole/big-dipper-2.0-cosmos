import * as R from 'ramda';
import type { Categories } from '../types';

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

  static fromJson(json: any): MsgUpdateWhitelistValidator {
    return {
      category: 'ethbridge',
      json,
      type: json['@type'],
      cosmosSender: R.pathOr('', ['cosmos_sender'], json),
    };
  }
}

export default MsgUpdateWhitelistValidator;