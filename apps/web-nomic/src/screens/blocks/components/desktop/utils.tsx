export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'height',
    width: 15,
  },
  {
    key: 'hash',
    width: 55,
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
