export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'from',
    width: 25,
  },
  {
    key: 'to',
    width: 25,
  },
  {
    key: 'amount',
    align: 'right',
    width: 25,
  },
  {
    key: 'completionTime',
    align: 'right',
    width: 25,
  },
];
