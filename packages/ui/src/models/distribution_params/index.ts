import * as R from 'ramda';

class DistributionParams {
  public baseProposerReward: number;

  public bonusProposerReward: number;

  public communityTax: number;

  public withdrawAddressEnabled: boolean;

  constructor(payload: object) {
    this.baseProposerReward = R.pathOr(0, ['baseProposerReward'], payload);
    this.bonusProposerReward = R.pathOr(0, ['bonusProposerReward'], payload);
    this.communityTax = R.pathOr(0, ['communityTax'], payload);
    this.withdrawAddressEnabled = R.pathOr(false, ['withdrawAddressEnabled'], payload);
  }

  static fromJson(data: object): DistributionParams {
    return {
      baseProposerReward: R.pathOr(0, ['base_proposer_reward'], data),
      bonusProposerReward: R.pathOr(0, ['bonus_proposer_reward'], data),
      communityTax: R.pathOr(0, ['community_tax'], data),
      withdrawAddressEnabled: R.pathOr(false, ['withdraw_addr_enabled'], data),
    };
  }
}

export default DistributionParams;
