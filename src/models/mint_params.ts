import * as R from 'ramda';

class MintParams {
  public mintDenom: string;
  public epochIdentifier: string;
  public reductionFactor: string;
  public distributionProportions: {
    staking: string;
    communityPool: string;
    poolIncentives: string;
    developerRewards: string;
  }

  constructor(payload: any) {
    this.mintDenom = payload.mintDenom;
    this.epochIdentifier = payload.epochIdentifier;
    this.reductionFactor = payload.reductionFactor;
    this.distributionProportions = payload.distributionProportions;
  }

  static fromJson(data: any) {
    return new MintParams({
      mintDenom: R.pathOr(0, ['mint_denom'], data),
      epochIdentifier: R.pathOr(0, ['epoch_identifier'], data),
      reductionFactor: R.pathOr(0, ['reduction_factor'], data),
      distributionProportions: {
        staking: R.pathOr('0', ['distribution_proportions', 'staking'], data),
        communityPool: R.pathOr('0', ['distribution_proportions', 'community_pool'], data),
        poolIncentives: R.pathOr('0', ['distribution_proportions', 'pool_incentives'], data),
        developerRewards: R.pathOr('0', ['distribution_proportions', 'developer_rewards'], data),
      },
    });
  }
}

export default MintParams;
