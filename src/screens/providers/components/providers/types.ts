export type TitleList = {
  ownerAddress: string;
  hostUri: string;
  region: string;
  organization: string;
  email: string;
  website: string;
}

export type TitleListState = {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  offsetCount: number;
  data: TitleList[];
}
