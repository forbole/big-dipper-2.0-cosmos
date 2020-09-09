export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'rank',
    width: 10,
  },
  {
    key: 'address',
    width: 30,
  },
  {
    key: 'quantity',
    width: 20,
    align: 'right',
  },
  {
    key: 'percentage',
    width: 20,
  },
  {
    key: 'value',
    align: 'right',
    width: 20,
  },
];
