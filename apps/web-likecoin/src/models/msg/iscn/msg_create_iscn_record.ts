import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreateIscnRecord {
  public category: Categories;

  public type: string;

  public json: object;

  public from: string;

  public record: {
    recordNotes: string;
    contentFingerprints: string[];
    stakeholders: object[];
    contentMetadata: object;
  };

  constructor(payload: object) {
    this.category = 'iscn';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.from = R.pathOr('', ['from'], payload);
    this.record = R.pathOr(
      {
        recordNotes: '',
        contentFingerprints: [],
        stakeholders: [],
        contentMetadata: {},
      },
      ['record'],
      payload
    );
  }

  static fromJson(json: object): MsgCreateIscnRecord {
    return {
      category: 'iscn',
      json,
      type: R.pathOr('', ['@type'], json),
      from: R.pathOr('', ['from'], json),
      record: {
        recordNotes: R.pathOr('', ['record', 'recordNotes'], json),
        contentFingerprints: R.pathOr([], ['record', 'contentFingerprints'], json),
        stakeholders: R.pathOr([], ['record', 'stakeholders'], json),
        contentMetadata: R.pathOr({}, ['record', 'contentMetadata'], json),
      },
    };
  }
}

export default MsgCreateIscnRecord;
