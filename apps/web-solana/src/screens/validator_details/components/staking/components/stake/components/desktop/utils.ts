export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'address',
    width: 50,
  },
  {
    key: 'activationEpoch',
    width: 25,
    align: 'right',
  },
  {
    key: 'amount',
    width: 25,
    align: 'right',
  },
];
