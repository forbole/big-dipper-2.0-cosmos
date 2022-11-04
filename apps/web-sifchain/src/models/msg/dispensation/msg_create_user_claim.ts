import * as R from 'ramda';
import { Categories } from '../types';

class MsgCreateUserClaim {
  public category: Categories;
  public type: string;
  public json: any;
  public userClaimAddress: string;
  public userClaimType:
    | 'DISTRIBUTION_TYPE_UNSPECIFIED'
    | 'DISTRIBUTION_TYPE_AIRDROP'
    | 'DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY'
    | 'DISTRIBUTION_TYPE_LIQUIDITY_MINING';

  constructor(payload: any) {
    this.category = 'dispensation';
    this.json = payload.json;
    this.type = payload.type;
    this.userClaimAddress = payload.userClaimAddress;
    this.userClaimType = payload.userClaimType;
  }

  static fromJson(json: any) {
    return new MsgCreateUserClaim({
      json,
      type: json['@type'],
      userClaimAddress: R.pathOr('', ['user_claim_address'], json),
      userClaimType: R.pathOr('DISTRIBUTION_TYPE_UNSPECIFIED', ['user_claim_type'], json),
    });
  }
}

export default MsgCreateUserClaim;
