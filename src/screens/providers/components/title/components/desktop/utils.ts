export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'ownerAddress',
    width: 15,
  },
  {
    key: 'hostUri',
    width: 30,
  },
  {
    key: 'region',
    align: 'right',
    width: 15,
  },
  {
    key: 'organization',
    align: 'right',
    width: 15,
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
