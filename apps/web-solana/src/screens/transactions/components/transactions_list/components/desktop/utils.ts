export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'slot',
    width: 15,
  },
  {
    key: 'signature',
    width: 30,
  },
  {
    key: 'instructions',
    align: 'right',
    width: 15,
  },
  {
    key: 'result',
    align: 'right',
    width: 20,
  },
  {
    key: 'time',
    align: 'right',
    width: 20,
  },
];
