import * as R from 'ramda';
import { Categories } from '../types';

class MsgCancelAuction {
  public category: Categories;
  public type: string;
  public json: any;
  public owner: string;
  public id: string;

  constructor(payload: any) {
    this.category = 'auction';
    this.type = payload.type;
    this.json = payload.json;
    this.owner = payload.owner;
    this.id = payload.id;
  }

  static fromJson(json: any) {
    return new MsgCancelAuction({
      json,
      type: json['@type'],
      owner: json.owner,
      id: R.pathOr('', ['id'], json),
    });
  }
}

export default MsgCancelAuction;
