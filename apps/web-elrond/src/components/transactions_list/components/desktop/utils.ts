export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'hash',
    width: 15,
  },
  {
    key: 'type',
    width: 20,
  },
  {
    key: 'shard',
    width: 15,
  },
  {
    key: 'from',
    width: 15,
  },
  {
    key: 'to',
    width: 15,
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
