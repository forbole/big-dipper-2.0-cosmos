export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'address',
    width: 75,
  },
  {
    key: 'amount',
    width: 25,
    align: 'right',
  },
];
