export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'address',
    width: 20,
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
    key: 'amount',
    width: 20,
    align: 'right',
  },
  {
    key: 'linkedUntil',
    width: 20,
    align: 'right',
  },
];
