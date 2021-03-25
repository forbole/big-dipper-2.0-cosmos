export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'depositor',
    width: 34,
  },
  {
    key: 'amount',
    width: 33,
    align: 'right',
  },
  {
    key: 'time',
    width: 33,
  },
];
