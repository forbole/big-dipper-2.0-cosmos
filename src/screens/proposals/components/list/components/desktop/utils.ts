export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'idx',
    width: 15,
  },
  {
    key: 'token',
    width: 10,
  },
  {
    key: 'price',
    align: 'right',
    width: 15,
  },
  {
    key: 'change',
    align: 'right',
    width: 15,
  },
  {
    key: 'volume',
    align: 'right',
    width: 15,
  },
  {
    key: 'marketCap',
    align: 'right',
    width: 15,
  },
  {
    key: 'holders',
    align: 'right',
    width: 15,
  },
];
