export type IscnType = {
  iscnId: string;
  ipld: string;
  height: number;
  iscnData: {
    name: string;
    publisher: string;
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
