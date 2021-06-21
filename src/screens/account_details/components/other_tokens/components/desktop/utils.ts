export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'token',
    width: 25,
  },
  {
    key: 'available',
    width: 25,
    align: 'right',
  },
  {
    key: 'reward',
    width: 25,
    align: 'right',
  },
  {
    key: 'commission',
    width: 25,
    align: 'right',
  },
];
