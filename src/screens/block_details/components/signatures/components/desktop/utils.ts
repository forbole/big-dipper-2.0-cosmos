export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'validator',
    width: 34,
  },
  {
    key: 'votingPower',
    align: 'right',
    width: 33,
  },
  {
    key: 'signed',
    width: 33,
  },
];
