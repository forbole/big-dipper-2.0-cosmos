export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'depositor',
    width: 50,
  },
  {
    key: 'amount',
    width: 50,
    align: 'right',
  },
];
