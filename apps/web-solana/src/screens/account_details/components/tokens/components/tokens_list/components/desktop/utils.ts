export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'token',
    width: 50,
  },
  {
    key: 'amount',
    align: 'right',
    width: 50,
  },
];
