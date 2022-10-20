export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number,
}[] = [
  {
    key: 'slot',
    width: 25,
  },
  {
    key: 'signature',
    width: 25,
  },
  {
    key: 'result',
    align: 'right',
    width: 25,
  },
  {
    key: 'time',
    align: 'right',
    width: 25,
  },
];
