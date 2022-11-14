import { Categories } from '../types';

class MsgChangeIscnRecordOwnership {
  public category: Categories;
  public type: string;
  public json: any;
  public from: string;
  public iscnId: string;
  public newOwner: string;

  constructor(payload: any) {
    this.category = 'iscn';
    this.type = payload.type;
    this.json = payload.json;
    this.iscnId = payload.iscnId;
    this.from = payload.from;
    this.newOwner = payload.newOwner;
  }

  static fromJson(json: any): MsgChangeIscnRecordOwnership {
    return {
      category: 'iscn',
      json,
      type: json['@type'],
      iscnId: json.iscn_id,
      from: json.from,
      newOwner: json.new_owner,
    };
  }
}

export default MsgChangeIscnRecordOwnership;
