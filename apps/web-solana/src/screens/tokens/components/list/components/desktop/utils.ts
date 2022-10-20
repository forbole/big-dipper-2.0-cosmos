export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
  component?: React.ReactNode;
  sortKey?: string;
  sort?: boolean;
}[] = [
  {
    key: 'idx',
    width: 10,
  },
  {
    key: 'token',
    width: 30,
    sort: true,
    sortKey: 'token',
  },
  {
    key: 'price',
    width: 20,
    align: 'right',
    sort: true,
    sortKey: 'price',
  },
  {
    key: 'marketCap',
    align: 'right',
    width: 20,
    sort: true,
    sortKey: 'marketCap',
  },
  {
    key: 'volume',
    align: 'right',
    width: 20,
    sort: true,
    sortKey: 'volume',
  },
];
