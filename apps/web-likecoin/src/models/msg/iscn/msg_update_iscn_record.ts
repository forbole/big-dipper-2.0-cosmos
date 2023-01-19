import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUpdateIscnRecord {
  public category: Categories;

  public type: string;

  public json: object;

  public from: string;

  public iscnId: string;

  public record: {
    recordNotes: string;
    contentFingerprints: string[];
    stakeholders: object[];
    contentMetadata: string;
  };

  constructor(payload: object) {
    this.category = 'iscn';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.from = R.pathOr('', ['from'], payload);
    this.iscnId = R.pathOr('', ['iscnId'], payload);
    this.record = R.pathOr(
      {
        recordNotes: '',
        contentFingerprints: [],
        stakeholders: [],
        contentMetadata: '',
      },
      ['record'],
      payload
    );
  }

  static fromJson(json: object): MsgUpdateIscnRecord {
    return {
      category: 'iscn',
      json,
      type: R.pathOr('', ['@type'], json),
      from: R.pathOr('', ['from'], json),
      iscnId: R.pathOr('', ['iscn_id'], json),
      record: {
        recordNotes: R.pathOr('', ['record', 'recordNotes'], json),
        contentFingerprints: R.pathOr([], ['record', 'contentFingerprints'], json),
        stakeholders: R.pathOr([], ['record', 'stakeholders'], json),
        contentMetadata: R.pathOr('', ['record', 'contentMetadata'], json),
      },
    };
  }
}

export default MsgUpdateIscnRecord;
