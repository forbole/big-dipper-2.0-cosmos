export interface TokensState {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  items: any[];
  total: number;
  loadNextPage?: (any) => void;
  itemCount?: number;
  loadMoreItems?: (any) => void;
  isItemLoaded?: (index: number) => boolean;
  searchCallback?: (value: string) => void;
}
