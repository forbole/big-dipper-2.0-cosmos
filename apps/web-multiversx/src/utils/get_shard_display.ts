export const getShardDisplay = (shard: number): { key: string; num: number | null } => {
  if (shard === 4294967295) {
    return {
      key: 'metachain',
      num: null,
    };
  }
  return {
    key: 'shardNumber',
    num: shard,
  };
};
