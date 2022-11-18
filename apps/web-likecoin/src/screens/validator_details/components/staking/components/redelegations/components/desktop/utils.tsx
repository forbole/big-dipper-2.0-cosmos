export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'address',
    width: 25,
  },
  {
    key: 'to',
    width: 25,
  },
  {
    key: 'amount',
    align: 'right',
    width: 20,
  },
  {
    key: 'completionTime',
    align: 'right',
    width: 30,
  },
];
