export type OverviewType = {
  address: string;
  withdrawalAddress: string;
}

export type BalanceType = {
  available: number;
  delegate: number;
  unbonding: number;
  reward: number;
  commission?: number;
  total: number;
}

export type TransactionType = {
  height: number;
  hash: string;
  success: boolean;
  timestamp: string;
  messages: number;
}

export type AccountDetailState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  balance: BalanceType;

  // signatures: AvatarName[];
  // transactions: TransactionType[];
}
