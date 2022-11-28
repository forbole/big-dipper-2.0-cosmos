export interface DepositType {
  amount: TokenUnit;
  user: string;
  timestamp: string;
}

export interface DepositState {
  data: DepositType[];
}

export type ItemType = Override<DepositType, { user: AvatarName }>;
