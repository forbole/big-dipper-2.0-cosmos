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
    bufferSize: payload?.buffer_size ?? 0,
    depositInterval: payload?.deposit_interval ?? 0,
    rewardsInterval: payload?.rewards_interval ?? 0,
    delegateInterval: payload?.delegate_interval ?? 0,
    icaTimeoutNanos: payload?.ica_timeout_nanos ?? 0,
    reinvestInterval: payload?.reinvest_interval ?? 0,
    strideCommission: payload?.stride_commission ?? 0,
    ibcTimeoutBlocks: payload?.ibc_timeout_blocks ?? 0,
    redemptionRateInterval: payload?.redemption_rate_interval ?? 0,
    feeTransferTimeoutNanos: payload?.fee_transfer_timeout_nanos ?? 0,
    ibcTransferTimeoutNanos: payload?.ibc_transfer_timeout_nanos ?? 0,
    maxStakeIcaCallsPerEpoch: payload?.max_stake_ica_calls_per_epoch ?? 0,
    validatorRebalancingThreshold: payload?.validator_rebalancing_threshold ?? 0,
    safetyMaxRedemptionRateThreshold: payload?.safety_max_redemption_rate_threshold ?? 0,
    safetyMinRedemptionRateThreshold: payload?.safety_min_redemption_rate_threshold ?? 0,
  };
}

export default StakeibcParams;
