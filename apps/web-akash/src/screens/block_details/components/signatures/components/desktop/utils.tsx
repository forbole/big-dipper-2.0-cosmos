import AvatarName from 'ui/components/avatar_name';

export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'validator',
    width: 100,
  },
];

export const formatRows = (data: AvatarName[]) =>
  data.map((x) => ({
    validator: <AvatarName address={x.address} imageUrl={x.imageUrl} name={x.name} />,
  }));
