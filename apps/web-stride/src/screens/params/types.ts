export interface Staking {
  bondDenom: string;
  unbondingTime: number;
  maxEntries: number;
  historicalEntries: number;
  maxValidators: number;
}

export interface Slashing {
  downtimeJailDuration: number;
  minSignedPerWindow: number;
  signedBlockWindow: number;
  slashFractionDoubleSign: number;
  slashFractionDowntime: number;
}

export interface Minting {
  blocksPerYear: number;
  goalBonded: number;
  inflationMax: number;
  inflationMin: number;
  inflationRateChange: number;
  mintDenom: string;
}

export interface Distribution {
  baseProposerReward: number;
  bonusProposerReward: number;
  communityTax: number;
  withdrawAddressEnabled: boolean;
}

export interface Gov {
  minDeposit: TokenUnit;
  maxDepositPeriod: number;
  quorum: number;
  threshold: number;
  vetoThreshold: number;
  votingPeriod: number;
}

export interface Stakeibc {
  bufferSize: number;
  depositInterval: number;
  rewardsInterval: number;
  delegateInterval: number;
  icaTimeoutNanos: number;
  reinvestInterval: number;
  strideCommission: number;
  ibcTimeoutBlocks: number;
  redemptionRateInterval: number;
  feeTransferTimeoutNanos: number;
  ibcTransferTimeoutNanos: number;
  maxStakeIcaCallsPerEpoch: number;
  validatorRebalancingThreshold: number;
  safetyMaxRedemptionRateThreshold: number;
  safetyMinRedemptionRateThreshold: number;
}

export interface ParamsState {
  loading: boolean;
  exists: boolean;
  staking: Staking | null;
  slashing: Slashing | null;
  minting: Minting | null;
  distribution: Distribution | null;
  gov: Gov | null;
  stakeibc: Stakeibc | null;
}
