export type ConnectionType = {
  network: string;
  identifier: string;
  creationTime: string;
}

export type ValidatorProfile = {
  status: number;
  jailed: boolean;
  condition: number;
  commission: number;
  signedBlockWindow: number;
  missedBlockCounter: number;
}
