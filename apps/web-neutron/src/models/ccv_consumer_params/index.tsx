import * as R from 'ramda';

type CCVConsumerParamsPayload = {
  enabled: boolean;
  unbondingPeriod: number;
  ccvTimeoutPeriod: number;
  historicalEntries: number;
  softOptOutThreshold: string;
  transferTimeoutPeriod: number;
  consumerRedistributionFraction: string;
  blocksPerDistributionTransmission: number;
};

function CCVConsumerParams(payload?: CCVConsumerParamsPayload) {
  return {
    enabled: R.pathOr(false, ['enabled'], payload),
    unbondingPeriod: R.pathOr(0, ['unbonding_period'], payload),
    ccvTimeoutPeriod: R.pathOr(0, ['ccv_timeout_period'], payload),
    historicalEntries: R.pathOr(0, ['historical_entries'], payload),
    softOptOutThreshold: R.pathOr('0', ['soft_opt_out_threshold'], payload),
    transferTimeoutPeriod: R.pathOr(0, ['transfer_timeout_period'], payload),
    consumerRedistributionFraction: R.pathOr('0', ['consumer_redistribution_fraction'], payload),
    blocksPerDistributionTransmission: R.pathOr(0, ['blocks_per_distribution_transmission'], payload),
  };
}

export default CCVConsumerParams;
