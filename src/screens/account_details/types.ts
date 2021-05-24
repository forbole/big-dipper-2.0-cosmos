export type OverviewType = {
  address: string;
  withdrawalAddress: string;
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

  // signatures: AvatarName[];
  // transactions: TransactionType[];
}
