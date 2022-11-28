export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'depositor',
    width: 40,
  },
  {
    key: 'amount',
    width: 30,
    align: 'right',
  },
  {
    key: 'time',
    width: 30,
    align: 'right',
  },
];
