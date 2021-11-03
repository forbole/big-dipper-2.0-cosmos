export type IscnType = {
  iscnId: string;
  ipld: string;
  height: number;
  owner: string;
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

export type ItemType = Override<IscnType, { owner: AvatarName }>
