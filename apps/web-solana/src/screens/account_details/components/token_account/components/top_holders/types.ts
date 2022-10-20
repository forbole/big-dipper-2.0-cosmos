export type HolderType = {
  holder: string;
  amount: string;
  decimals: number;
}

export type HoldersState = {
  loading: boolean;
  exists: boolean;
  holders: HolderType[];
}

export type ItemType = Override<HolderType, { holder: AvatarName }>
