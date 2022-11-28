export interface NodeType {
  pubkey: string;
  name: string;
  shard: number;
  version: string;
  status: string;
  online: boolean;
}

export interface NodeState {
  page: number;
  loading: boolean;
  total: number;
  items: NodeType[];
}
