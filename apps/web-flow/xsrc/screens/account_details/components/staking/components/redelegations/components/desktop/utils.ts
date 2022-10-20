export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'from',
    width: 25,
  },
  {
    key: 'to',
    width: 25,
  },
  {
    key: 'amount',
    width: 25,
    align: 'right',
  },
  {
    key: 'linkedUntil',
    width: 25,
    align: 'right',
  },
];
