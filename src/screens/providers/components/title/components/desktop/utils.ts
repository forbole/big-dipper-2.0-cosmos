export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'ownerAddress',
    width: 25,
  },
  {
    key: 'hostUri',
    width: 20,
  },
  {
    key: 'region',
    align: 'right',
    width: 10,
  },
  {
    key: 'organization',
    align: 'right',
    width: 20,
  },
  {
    key: 'email',
    align: 'right',
    width: 5,
  },
  {
    key: 'website',
    align: 'right',
    width: 20,
  },
];
