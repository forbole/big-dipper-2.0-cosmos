import * as R from 'ramda';

class MintParams {
  public mintDenom: string;

  public epochIdentifier: string;

  public reductionFactor: string;

  public genesisEpochProvisions: string;

  public reductionPeriodInEpochs: number;

  public mintingRewardsDistributionStartEpoch: number;

  constructor(payload: object) {
    this.epochIdentifier = R.pathOr('', ['epoch_identifier'], payload);
    this.reductionFactor = R.pathOr('', ['reduction_factor'], payload);
    this.genesisEpochProvisions = R.pathOr('', ['genesis_epoch_provisions'], payload);
    this.reductionPeriodInEpochs = R.pathOr(0, ['reduction_period_in_epochs'], payload);
    this.mintingRewardsDistributionStartEpoch = R.pathOr(
      0,
      ['minting_rewards_distribution_start_epoch'],
      payload
    );
    this.mintDenom = R.pathOr('', ['mintDenom'], payload);
  }

  static fromJson(data: object): MintParams {
    return {
      epochIdentifier: R.pathOr('', ['epoch_identifier'], data),
      reductionFactor: R.pathOr('', ['reduction_factor'], data),
      genesisEpochProvisions: R.pathOr('', ['genesis_epoch_provisions'], data),
      reductionPeriodInEpochs: R.pathOr(0, ['reduction_period_in_epochs'], data),
      mintingRewardsDistributionStartEpoch: R.pathOr(
        0,
        ['minting_rewards_distribution_start_epoch'],
        data
      ),
      mintDenom: R.pathOr('0', ['mint_denom'], data),
    };
  }
}

export default MintParams;
