export interface TitleListType {
  ownerAddress: string;
  hostUri: string;
  region: string;
  organization: string;
  email: string;
  website: string;
}

export interface TitleListState {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  offsetCount: number;
  data: TitleListType[];
}
