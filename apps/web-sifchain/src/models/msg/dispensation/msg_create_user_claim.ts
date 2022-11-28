import type { Categories } from '@/models/msg/types';
import * as R from 'ramda';

class MsgCreateUserClaim {
  public category: Categories;

  public type: string;

  public json: object;

  public userClaimAddress: string;

  public userClaimType:
    | 'DISTRIBUTION_TYPE_UNSPECIFIED'
    | 'DISTRIBUTION_TYPE_AIRDROP'
    | 'DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY'
    | 'DISTRIBUTION_TYPE_LIQUIDITY_MINING';

  constructor(payload: object) {
    this.category = 'dispensation';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.userClaimAddress = R.pathOr('', ['userClaimAddress'], payload);
    this.userClaimType = R.pathOr('DISTRIBUTION_TYPE_UNSPECIFIED', ['userClaimType'], payload);
  }

  static fromJson(json: object): MsgCreateUserClaim {
    return {
      category: 'dispensation',
      json,
      type: R.pathOr('', ['@type'], json),
      userClaimAddress: R.pathOr('', ['user_claim_address'], json),
      userClaimType: R.pathOr('DISTRIBUTION_TYPE_UNSPECIFIED', ['user_claim_type'], json),
    };
  }
}

export default MsgCreateUserClaim;
