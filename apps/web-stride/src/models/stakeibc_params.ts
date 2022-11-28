import * as R from 'ramda';

/* eslint-disable camelcase */
type Payload = {
  buffer_size?: number;
  deposit_interval?: number;
  rewards_interval?: number;
  delegate_interval?: number;
  ica_timeout_nanos?: number;
  reinvest_interval?: number;
  stride_commission?: number;
  ibc_timeout_blocks?: number;
  redemption_rate_interval?: number;
  fee_transfer_timeout_nanos?: number;
  ibc_transfer_timeout_nanos?: number;
  max_stake_ica_calls_per_epoch?: number;
  validator_rebalancing_threshold?: number;
  safety_max_redemption_rate_threshold?: number;
  safety_min_redemption_rate_threshold?: number;
};

function StakeibcParams(payload?: Payload) {
  return {
    bufferSize: R.pathOr(0, ['buffer_size'], payload),
    depositInterval: R.pathOr(0, ['deposit_interval'], payload),
    rewardsInterval: R.pathOr(0, ['rewards_interval'], payload),
    delegateInterval: R.pathOr(0, ['delegate_interval'], payload),
    icaTimeoutNanos: R.pathOr(0, ['ica_timeout_nanos'], payload),
    reinvestInterval: R.pathOr(0, ['reinvest_interval'], payload),
    strideCommission: R.pathOr(0, ['stride_commission'], payload),
    ibcTimeoutBlocks: R.pathOr(0, ['ibc_timeout_blocks'], payload),
    redemptionRateInterval: R.pathOr(0, ['redemption_rate_interval'], payload),
    feeTransferTimeoutNanos: R.pathOr(0, ['fee_transfer_timeout_nanos'], payload),
    ibcTransferTimeoutNanos: R.pathOr(0, ['ibc_transfer_timeout_nanos'], payload),
    maxStakeIcaCallsPerEpoch: R.pathOr(0, ['max_stake_ica_calls_per_epoch'], payload),
    validatorRebalancingThreshold: R.pathOr(0, ['validator_rebalancing_threshold'], payload),
    safetyMaxRedemptionRateThreshold: R.pathOr(
      0,
      ['safety_max_redemption_rate_threshold'],
      payload
    ),
    safetyMinRedemptionRateThreshold: R.pathOr(
      0,
      ['safety_min_redemption_rate_threshold'],
      payload
    ),
  };
}

export default StakeibcParams;
