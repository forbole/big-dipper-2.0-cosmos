import * as R from 'ramda';
import { Categories } from '../types';

class MsgRunDistribution {
  public category: Categories;
  public type: string;
  public json: any;
  public authorizedRunner: string;
  public distributionType: 'DISTRIBUTION_TYPE_UNSPECIFIED' | 'DISTRIBUTION_TYPE_AIRDROP' | 'DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY' | 'DISTRIBUTION_TYPE_LIQUIDITY_MINING';

  constructor(payload: any) {
    this.category = 'dispensation';
    this.json = payload.json;
    this.type = payload.type;
    this.authorizedRunner = payload.authorizedRunner;
    this.distributionType = payload.distributionType;
  }

  static fromJson(json: any) {
    return new MsgRunDistribution({
      json,
      type: json['@type'],
      authorizedRunner: R.pathOr('', ['authorized_runner'], json),
      distributionType: R.pathOr('DISTRIBUTION_TYPE_UNSPECIFIED', ['distribution_type'], json),
    });
  }
}

export default MsgRunDistribution;
