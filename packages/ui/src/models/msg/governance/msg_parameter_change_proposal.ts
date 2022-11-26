import * as R from 'ramda';

type Change = {
  subspace: string;
  key: string;
  value: string | number;
};

class MsgParameterChangeProposal {
  public type: string;

  public title: string;

  public description: string;

  public changes: Change[];

  constructor(payload: object) {
    this.type = R.pathOr('', ['type'], payload);
    this.title = R.pathOr('', ['title'], payload);
    this.description = R.pathOr('', ['description'], payload);
    this.changes = R.pathOr<MsgParameterChangeProposal['changes']>([], ['changes'], payload);
  }

  static fromJson(json: object): MsgParameterChangeProposal {
    return {
      type: R.pathOr('', ['@type'], json),
      title: R.pathOr('', ['title'], json),
      description: R.pathOr('', ['description'], json),
      changes: R.pathOr<MsgParameterChangeProposal['changes']>([], ['changes'], json).map((x) => ({
        subspace: x?.subspace ?? '',
        key: x?.key ?? '',
        value: x?.value ?? '',
      })),
    };
  }
}

export default MsgParameterChangeProposal;
