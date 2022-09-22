export type ProvidersState = {
  loading: boolean;
  exists: boolean;
  activeProvidersCount: number;
  activeLeasesCount: number;
  memory: MemoryState;
  cpu: CPUState;
  storage: StorageState;
  providers: ProvidersListState;
}

export type MemoryState = {
  available: number;
  used: number;
}

export type CPUState = {
  available: number;
  used: number;
}

export type StorageState = {
  available: number;
  used: number;
  pending: number;
}

export type ProvidersListState = {
  isNextPageLoading: boolean;
  items: ProviderInfo[][];
  pagination: ProvidersListPaginationState;
}

export type ProvidersListPaginationState = {
  itemsPerPage: number;
  currentPage: number;
  totalCount: number;
}

export type ProviderInfo = {
  ownerAddress: string;
  hostURI: string;
  region?: string;
  organization?: string;
  emailAddress?: string;
  website?: string;
}
