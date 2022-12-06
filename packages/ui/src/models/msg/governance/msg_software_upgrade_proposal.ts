import * as R from 'ramda';

type Plan = {
  name: string;
  time: string;
  height: string | number;
  info: string;
  upgradedClientState: unknown;
};
class MsgSoftwareUpgradeProposal {
  public type: string;

  public title: string;

  public description: string;

  public plan: Plan;

  constructor(payload: object) {
    this.type = R.pathOr('', ['type'], payload);
    this.title = R.pathOr('', ['title'], payload);
    this.description = R.pathOr('', ['description'], payload);
    this.plan = R.pathOr(
      { name: '', time: '', height: '', info: '', upgradedClientState: {} },
      ['plan'],
      payload
    );
  }

  static fromJson(json: object): MsgSoftwareUpgradeProposal {
    return {
      type: R.pathOr('', ['@type'], json),
      title: R.pathOr('', ['title'], json),
      description: R.pathOr('', ['description'], json),
      plan: R.pathOr(
        { name: '', time: '', height: '', info: '', upgradedClientState: {} },
        ['plan'],
        json
      ),
    };
  }
}

export default MsgSoftwareUpgradeProposal;
