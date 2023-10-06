import * as R from 'ramda';

class CCVConsumerParams {
  public enabled: boolean;

  public unbondingPeriod: number;

  public ccvTimeoutPeriod: number;

  public historicalEntries: number;

  public softOptOutThreshold: string;

  public transferTimeoutPeriod: number;

  public consumerRedistributionFraction: string;

  public blocksPerDistributionTransmission: number;

  constructor(payload: object) {
    this.enabled = R.pathOr(false, ['enabled'], payload);
    this.unbondingPeriod = R.pathOr(0, ['unbondingPeriod'], payload);
    this.ccvTimeoutPeriod = R.pathOr(0, ['ccvTimeoutPeriod'], payload);
    this.historicalEntries = R.pathOr(0, ['historicalEntries'], payload);
    this.softOptOutThreshold = R.pathOr('0', ['softOptOutThreshold'], payload);
    this.transferTimeoutPeriod = R.pathOr(0, ['transferTimeoutPeriod'], payload);
    this.consumerRedistributionFraction = R.pathOr(
      '0',
      ['consumerRedistributionFraction'],
      payload
    );
    this.blocksPerDistributionTransmission = R.pathOr(
      0,
      ['blocksPerDistributionTransmission'],
      payload
    );
  }

  static fromJson(data: object): CCVConsumerParams {
    return {
      enabled: R.pathOr(false, ['enabled'], data),
      unbondingPeriod: R.pathOr(0, ['unbonding_period'], data),
      ccvTimeoutPeriod: R.pathOr(0, ['ccv_timeout_period'], data),
      historicalEntries: R.pathOr(0, ['historical_entries'], data),
      softOptOutThreshold: R.pathOr('0', ['soft_opt_out_threshold'], data),
      transferTimeoutPeriod: R.pathOr(0, ['transfer_timeout_period'], data),
      consumerRedistributionFraction: R.pathOr('0', ['consumer_redistribution_fraction'], data),
      blocksPerDistributionTransmission: R.pathOr(
        0,
        ['blocks_per_distribution_transmission'],
        data
      ),
    };
  }
}

export default CCVConsumerParams;
