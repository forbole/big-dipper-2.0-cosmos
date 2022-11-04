export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'block',
    width: 20,
  },
  {
    key: 'hash',
    width: 25,
  },
  {
    key: 'txs',
    align: 'right',
    width: 10,
  },
  {
    key: 'time',
    align: 'right',
    width: 20,
  },
];
