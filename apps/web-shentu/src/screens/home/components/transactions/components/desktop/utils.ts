export const columns: {
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
    width: 20,
  },
  {
    key: 'type',
    width: 20,
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
