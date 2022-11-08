export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'name',
    width: 25,
  },
  {
    key: 'pubkey',
    width: 35,
  },
  {
    key: 'shard',
    width: 15,
  },
  {
    key: 'version',
    width: 15,
  },
  {
    key: 'status',
    width: 10,
  },
];
