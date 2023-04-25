export interface NFTTypes {
  identifier: string;
  name: string;
  type: string;
  creator: string;
  collection: string;
}

export interface BlockState {
  page: number;
  loading: boolean;
  total: number;
  items: NFTTypes[];
}
