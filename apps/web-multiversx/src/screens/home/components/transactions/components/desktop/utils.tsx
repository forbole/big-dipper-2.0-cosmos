export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'hash',
    width: 25,
  },
  {
    key: 'from',
    width: 20,
  },
  {
    key: 'to',
    width: 20,
  },
  {
    key: 'status',
    width: 15,
  },
  {
    key: 'time',
    width: 20,
    align: 'right',
  },
];
