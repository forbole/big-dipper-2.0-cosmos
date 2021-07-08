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
  blocksPerYear: number,
  goalBonded: number,
  inflationMax: number,
  inflationMin: number,
  inflationRateChange: number,
  mintDenom: string
}

export type ParamsState = {
  loading: boolean;
  exists: boolean;
  staking: Staking | null;
  slashing: Slashing | null;
  minting: Minting | null;
}
