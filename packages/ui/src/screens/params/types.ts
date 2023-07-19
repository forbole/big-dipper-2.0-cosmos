export interface Staking {
  bondDenom: string;
  unbondingTime: number;
  maxEntries: number;
  historicalEntries: number;
  maxValidators: number;
  minSelfDelegation: TokenUnit;
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

export interface FeeModel {
  maxDiscount: number;
  maxBlockGas: number;
  initialGasPrice: number;
  longEmaBlockLength: number;
  shortEmaBlockLength: number;
  maxGasPriceMultiplier: number;
  escalationStartFraction: number;
}

export interface NFT {
  nftMintFee: TokenUnit;
}

export interface FT {
  ftIssueFee: TokenUnit;
  tokenUpgradeGracePeriod?: number | undefined;
  tokenUpgradeDecisionTimeout?: string | undefined;
}
export interface ParamsState {
  loading: boolean;
  exists: boolean;
  staking: Staking | null;
  slashing: Slashing | null;
  minting: Minting | null;
  distribution: Distribution | null;
  gov: Gov | null;
  feeModel: FeeModel | null;
  nft: NFT | null;
  ft: FT | null;
}
