export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'token',
    width: 20,
  },
  {
    key: 'identifier',
    width: 20,
  },
  {
    key: 'owner',
    width: 20,
  },
  {
    key: 'transactions',
    width: 20,
    align: 'right',
  },
  {
    key: 'accounts',
    width: 20,
    align: 'right',
  },
];
