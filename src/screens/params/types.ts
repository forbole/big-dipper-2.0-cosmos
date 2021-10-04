export type Staking = {
  bondDenom: string;
  unbondingTime: number;
  maxEntries: number;
  historicalEntries: number;
  maxValidators: number;
}

export type Slashing = {
  downtimeJailDuration: number;
  minSignedPerWindow: number;
  signedBlockWindow: number;
  slashFractionDoubleSign: number;
  slashFractionDowntime: number;
}

export type Minting = {
  blocksPerYear: number;
  goalBonded: number;
  inflationMax: number;
  inflationMin: number;
  inflationRateChange: number;
  mintDenom: string;
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

export type InflationRate = {
  denom: string;
  inflation: string;
}[]

export type GasPrice = {
  denom: string;
  amount: string;
}[]

export type ParamsState = {
  loading: boolean;
  exists: boolean;
  staking: Staking | null;
  slashing: Slashing | null;
  minting: Minting | null;
  distribution: Distribution | null;
  gov: Gov | null;
<<<<<<< HEAD
<<<<<<< HEAD
  inflationRate: InflationRate | null;
  gasPrice: GasPrice | null;
=======
  gasPrice: GasPrice | null [];
>>>>>>> 2b76b47 (remove change for params index)
=======
  gasPrice: GasPrice | null;
>>>>>>> ab3e535 (delete gasPrice_params.ts)
}
