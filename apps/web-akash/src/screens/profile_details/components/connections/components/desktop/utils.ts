export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'network',
    width: 25,
  },
  {
    key: 'identifier',
    width: 50,
    align: 'left',
  },
  {
    key: 'creationTime',
    width: 25,
    align: 'right',
  },
];
