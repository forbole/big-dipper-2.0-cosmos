export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'hash',
    width: 20,
  },
  {
    key: 'type',
    width: 20,
  },
  {
    key: 'from',
    width: 15,
  },
  {
    key: 'to',
    width: 15,
  },
  {
    key: 'status',
    width: 15,
  },
  {
    key: 'time',
    width: 15,
    align: 'right',
  },
];
