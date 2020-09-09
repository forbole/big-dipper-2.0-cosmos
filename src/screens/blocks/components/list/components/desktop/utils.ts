export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'slot',
    width: 10,
  },
  {
    key: 'leader',
    width: 15,
  },
  {
    key: 'hash',
    width: 25,
  },
  {
    key: 'parentHash',
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
    width: 15,
  },
];
