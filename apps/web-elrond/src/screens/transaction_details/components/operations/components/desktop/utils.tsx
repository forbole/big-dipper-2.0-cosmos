export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'action',
    width: 15,
  },
  {
    key: 'sender',
    width: 30,
  },
  {
    key: 'receiver',
    width: 30,
  },
  {
    key: 'value',
    width: 25,
    align: 'right',
  },
];
