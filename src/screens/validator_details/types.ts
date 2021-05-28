export type OverviewType = {
  validator: {
    imageUrl: string;
    moniker: string;
  };
  operatorAddress: string;
  selfDelegateAddress: string;
  description: string;
  status: number;
  jailed: boolean;
  website: string;
  condition: number;
  commission: number;
  signedBlockWindow: number;
  missedBlockCounter: number;
}

export type TransactionType = {
  height: number;
  hash: string;
  success: boolean;
  timestamp: string;
  messages: number;
}

export type VotingPowerType = {
  height: number;
  overall: number;
  self: number;
  selfDelegatePercent: number;
  selfDelegate: number;
}

export type ValidatorDetailsState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  votingPower: VotingPowerType;
  // signatures: AvatarName[];
  // transactions: TransactionType[];
}
