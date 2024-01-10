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
  mintDenom: string;
  epochIdentifier: string;
  reductionFactor: string;
  genesisEpochProvisions: string;
  reductionPeriodInEpochs: number;
  mintingRewardsDistributionStartEpoch: number;
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

export interface ParamsState {
  loading: boolean;
  exists: boolean;
  staking: Staking | null;
  slashing: Slashing | null;
  minting: Minting | null;
  distribution: Distribution | null;
  gov: Gov | null;
}
