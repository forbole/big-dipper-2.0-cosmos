import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreateDistribution {
  public category: Categories;

  public type: string;

  public json: object;

  public distributor: string;

  public distributionType:
    | 'DISTRIBUTION_TYPE_UNSPECIFIED'
    | 'DISTRIBUTION_TYPE_AIRDROP'
    | 'DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY'
    | 'DISTRIBUTION_TYPE_LIQUIDITY_MINING';

  constructor(payload: object) {
    this.category = 'dispensation';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.distributor = R.pathOr('', ['distributor'], payload);
    this.distributionType = R.pathOr(
      'DISTRIBUTION_TYPE_UNSPECIFIED',
      ['distributionType'],
      payload
    );
  }

  static fromJson(json: object): MsgCreateDistribution {
    return {
      category: 'dispensation',
      json,
      type: R.pathOr('', ['@type'], json),
      distributor: R.pathOr('', ['distributor'], json),
      distributionType: R.pathOr('DISTRIBUTION_TYPE_UNSPECIFIED', ['distribution_type'], json),
    };
  }
}

export default MsgCreateDistribution;
