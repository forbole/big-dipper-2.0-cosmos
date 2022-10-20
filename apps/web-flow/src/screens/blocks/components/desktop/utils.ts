export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'height',
    width: 25,
  },
  {
    key: 'hash',
    width: 30,
  },
  {
    key: 'txs',
    align: 'right',
    width: 20,
  },
  {
    key: 'time',
    align: 'right',
    width: 25,
  },
];
