export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'block',
    width: 20,
  },
  {
    key: 'hash',
    width: 60,
  },
  {
    key: 'type',
    width: 25,
  },
  {
    key: 'time',
    align: 'right',
    width: 20,
  },
];
