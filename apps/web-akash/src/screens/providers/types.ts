export interface MemoryState {
  available: number;
  used: number;
}

export interface CPUState {
  available: number;
  used: number;
}

export interface StorageState {
  available: number;
  used: number;
  pending: number;
}

export interface ProvidersListPaginationState {
  itemsPerPage: number;
  currentPage: number;
  totalCount: number;
}

export interface ProviderInfo {
  ownerAddress: string;
  hostURI: string;
  region?: string;
  organization?: string;
  emailAddress?: string;
  website?: string;
}

export interface ProvidersListState {
  isNextPageLoading: boolean;

  // Providers items
  items: ProviderInfo[];

  // Paginated providers list
  pages: ProviderInfo[][];

  pagination: ProvidersListPaginationState;
}

export interface ProvidersState {
  loading: boolean;
  exists: boolean;
  activeProvidersCount: number;
  activeLeasesCount: number;
  memory: MemoryState;
  cpu: CPUState;
  storage: StorageState;
  providers: ProvidersListState;
}
