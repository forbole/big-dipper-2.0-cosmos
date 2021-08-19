import * as R from 'ramda';
import { Categories } from '../types';

class MsgUpdateIscnRecord {
  public category: Categories;
  public type: string;
  public json: any;
  public from: string;
  public iscnId: string;
  public record: {
    recordNotes: string;
    contentFingerprints: string[];
    stakeholders: JSON[];
    contentMetadata: JSON;
  };

  constructor(payload: any) {
    this.category = 'iscn';
    this.type = payload.type;
    this.json = payload.json;
    this.from = payload.from;
    this.iscnId = payload.iscnId;
    this.record = payload.record;
  }

  static fromJson(json: any) {
    return new MsgUpdateIscnRecord({
      json,
      type: json['@type'],
      from: json.from,
      iscnId: json.iscn_id,
      record: {
        recordNotes: R.pathOr('', ['record', 'recordNotes'], json),
        contentFingerprints: R.pathOr([], ['record', 'contentFingerprints'], json),
        stakeholders: R.pathOr([], ['record', 'stakeholders'], json),
        contentMetadata: R.pathOr('', ['record', 'contentMetadata'], json),
      },
    });
  }
}

export default MsgUpdateIscnRecord;
