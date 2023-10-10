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

export interface CCVConsumer {
  enabled: boolean;
  unbondingPeriod: number;
  ccvTimeoutPeriod: number;
  historicalEntries: number;
  softOptOutThreshold: string;
  transferTimeoutPeriod: number;
  consumerRedistributionFraction: string;
  blocksPerDistributionTransmission: number;
}

export interface ParamsState {
  loading: boolean;
  exists: boolean;
  ccvConsumer: CCVConsumer | null;
  staking: Staking | null;
  slashing: Slashing | null;
  minting: Minting | null;
  distribution: Distribution | null;
  gov: Gov | null;
}
