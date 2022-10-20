import * as R from 'ramda';

class DistributionParams {
  public baseProposerReward: number;
  public bonusProposerReward: number;
  public communityTax: number;
  public withdrawAddressEnabled: boolean;

  constructor(payload: any) {
    this.baseProposerReward = payload.baseProposerReward;
    this.bonusProposerReward = payload.bonusProposerReward;
    this.communityTax = payload.communityTax;
    this.withdrawAddressEnabled = payload.withdrawAddressEnabled;
  }

  static fromJson(data: any) {
    return new DistributionParams({
      baseProposerReward: R.pathOr(0, ['base_proposer_reward'], data),
      bonusProposerReward: R.pathOr(0, ['bonus_proposer_reward'], data),
      communityTax: R.pathOr(0, ['community_tax'], data),
      withdrawAddressEnabled: R.pathOr(false, ['withdraw_addr_enabled'], data),
    });
  }
}

export default DistributionParams;
