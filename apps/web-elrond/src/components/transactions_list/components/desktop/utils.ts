export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'hash',
    width: 20,
  },
  {
    key: 'shard',
    width: 16,
  },
  {
    key: 'from',
    width: 22,
  },
  {
    key: 'to',
    width: 22,
  },
  {
    key: 'status',
    width: 10,
  },
  {
    key: 'time',
    width: 10,
    align: 'right',
  },
];
