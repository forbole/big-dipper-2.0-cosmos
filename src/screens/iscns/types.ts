export type IscnType = {
  iscnId: string;
  ipld: string;
  height: number;
  owner: AvatarName;
  iscnData: {
    name: string;
    publisher: string;
    url: string;
  }
}

export type IscnsState = {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  rawDataTotal: number;
  items: IscnType[];
}
