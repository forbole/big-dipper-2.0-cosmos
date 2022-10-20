export type NodeType = {
  pubkey: string;
  name: string;
  shard: number;
  version: string;
  status: string;
  online: boolean;
}

export type NodeState = {
  page: number;
  loading: boolean;
  total: number;
  items: NodeType[];
}
