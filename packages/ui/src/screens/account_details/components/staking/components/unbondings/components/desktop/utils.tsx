export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'validator',
    width: 40,
  },
  {
    key: 'amount',
    align: 'right',
    width: 30,
  },
  {
    key: 'completionTime',
    align: 'right',
    width: 30,
  },
];
