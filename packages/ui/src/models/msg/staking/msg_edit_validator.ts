import numeral from 'numeral';
import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgEditValidator {
  public category: Categories;

  public type: string;

  public description: {
    moniker: string;
    identity: string;
    website: string;
    securityContact: string;
    details: string;
  };

  public validatorAddress: string;

  public commissionRate: string | number;

  public minSelfDelegation: string | number;

  public json: object;

  constructor(payload: object) {
    this.category = 'staking';
    this.type = R.pathOr('', ['type'], payload);
    this.description = R.pathOr(
      {
        moniker: '',
        identity: '',
        website: '',
        securityContact: '',
        details: '',
      },
      ['description'],
      payload
    );
    this.validatorAddress = R.pathOr('', ['validatorAddress'], payload);
    this.commissionRate = R.pathOr('', ['commissionRate'], payload);
    this.minSelfDelegation = R.pathOr('', ['minSelfDelegation'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgEditValidator {
    return {
      category: 'staking',
      json,
      type: R.pathOr('', ['@type'], json),
      description: {
        moniker: R.pathOr('', ['description', 'moniker'], json),
        identity: R.pathOr('', ['description', 'identity'], json),
        website: R.pathOr('', ['description', 'website'], json),
        securityContact: R.pathOr('', ['description', 'security_contact'], json),
        details: R.pathOr('', ['description', 'details'], json),
      },
      validatorAddress: R.pathOr('', ['validator_address'], json),
      commissionRate: numeral(R.pathOr('0', ['commission_rate'], json)).value() ?? 0,
      minSelfDelegation: numeral(R.pathOr('0', ['min_self_delegation'], json)).value() ?? 0,
    };
  }
}

export default MsgEditValidator;
