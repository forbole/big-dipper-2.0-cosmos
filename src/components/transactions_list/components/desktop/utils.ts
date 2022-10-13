export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'block',
    width: 15,
  },
  {
    key: 'hash',
    width: 15,
  },
  {
    key: 'type',
    width: 20,
  },
  {
    key: 'messages',
    align: 'right',
    width: 10,
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
