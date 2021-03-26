export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'address',
    width: 34,
  },
  {
    key: 'amount',
    width: 33,
    align: 'right',
  },
  {
    key: 'linkedUntil',
    width: 33,
    align: 'right',
  },
];
