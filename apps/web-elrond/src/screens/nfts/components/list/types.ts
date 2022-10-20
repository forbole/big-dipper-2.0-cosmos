export type NFTTypes = {
  identifier: string;
  name: string;
  type: string;
  creator: string;
  collection: string;
}

export type BlockState = {
  page: number;
  loading: boolean;
  total: number;
  items: NFTTypes[];
}
