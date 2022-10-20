export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'token',
    width: 40,
  },
  {
    key: 'balance',
    width: 33,
  },
  {
    key: 'address',
    width: 33,
    align: 'right',

  },
];
