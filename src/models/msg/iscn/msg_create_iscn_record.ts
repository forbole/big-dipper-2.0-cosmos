import { Categories } from '../types';

class MsgCreateIscnRecord {
  public category: Categories;
  public type: string;
  public iscnId: string;
  public recordIpld: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'iscn';
    this.type = payload.type;
    this.json = payload.json;
    this.iscnId = payload.iscnId;
    this.recordIpld = payload.recordIpld;
  }

  static fromJson(json: any) {
    return new MsgCreateIscnRecord({
      json,
      type: json['@type'],
      iscnId: json.iscn_id,
      recordIpld: json.record_ipld,
    });
  }
}

export default MsgCreateIscnRecord;
