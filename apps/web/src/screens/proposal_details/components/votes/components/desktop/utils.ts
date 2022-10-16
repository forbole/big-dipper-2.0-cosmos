export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'voter',
    // width: 34,
    width: 50,
  },
  // {
  //   key: 'votingPower',
  //   width: 33,
  //   align: 'right',
  // },
  {
    key: 'vote',
    // width: 33,
    width: 50,
    align: 'right',
  },
];
