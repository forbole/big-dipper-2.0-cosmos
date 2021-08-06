export type Staking = {
  bondDenom: string;
  unbondingTime: number;
  maxEntries: number;
  historicalEntries: number;
  maxValidators: number;
  minCommissionRate: number;
}

export type Slashing = {
  downtimeJailDuration: number;
  minSignedPerWindow: number;
  signedBlockWindow: number;
  slashFractionDoubleSign: number;
  slashFractionDowntime: number;
}

export type Minting = {
  mintDenom: string;
  epochIdentifier: string;
  reductionFactor: number;
  stakingDistribution: number;
  communityPoolDistribution: number;
  poolIncentiveDistribution: number;
  developerRewardsDistribution: number;
}

export type Distribution = {
  baseProposerReward: number;
  bonusProposerReward: number;
  communityTax: number;
  withdrawAddressEnabled: boolean;
}

export type Gov = {
  minDeposit: TokenUnit;
  maxDepositPeriod: number;
  quorum: number;
  threshold: number;
  vetoThreshold: number;
  votingPeriod: number;
}

export type ParamsState = {
  loading: boolean;
  exists: boolean;
  staking: Staking | null;
  slashing: Slashing | null;
  minting: Minting | null;
  distribution: Distribution | null;
  gov: Gov | null;
}
