import numeral from 'numeral';
import * as R from 'ramda';

type Plan = {
  name: string;
  time: string;
  height: number | null;
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
      { name: '', time: '', height: 0, info: '', upgradedClientState: {} },
      ['plan'],
      payload
    );
  }

  static fromJson(json: object): MsgSoftwareUpgradeProposal {
    return {
      type: R.pathOr('', ['@type'], json),
      title: R.pathOr('', ['title'], json),
      description: R.pathOr('', ['description'], json),
      plan: {
        name: R.pathOr('', ['plan', 'name'], json),
        time: R.pathOr('', ['plan', 'time'], json),
        height: numeral(R.pathOr('0', ['plan', 'height'], json)).value() ?? 0,
        info: R.pathOr('', ['plan', 'info'], json),
        upgradedClientState: R.pathOr({}, ['plan', 'upgraded_client_state'], json),
      },
    };
  }
}

export default MsgSoftwareUpgradeProposal;
