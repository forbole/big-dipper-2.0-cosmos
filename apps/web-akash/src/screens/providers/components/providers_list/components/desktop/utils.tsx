export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'ownerAddress',
    width: 20,
  },
  {
    key: 'hostUri',
    width: 25,
  },
  {
    key: 'region',
    align: 'right',
    width: 15,
  },
  {
    key: 'organization',
    align: 'right',
    width: 20,
  },
  {
    key: 'email',
    align: 'center',
    width: 5,
  },
  {
    key: 'website',
    align: 'right',
    width: 15,
  },
];
