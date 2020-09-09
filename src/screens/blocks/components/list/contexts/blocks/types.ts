export interface BlocksState {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  items: any[];
  loadNextPage?: (any) => void;
  itemCount?: number;
  loadMoreItems?: (any) => void;
  isItemLoaded?: (index: number) => boolean;
}
