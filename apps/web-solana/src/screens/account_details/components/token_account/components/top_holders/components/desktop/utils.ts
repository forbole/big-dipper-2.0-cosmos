export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'rank',
    width: 5,
    align: 'center',
  },
  {
    key: 'holder',
    width: 65,
  },
  {
    key: 'amount',
    width: 30,
    align: 'right',
  },
];
