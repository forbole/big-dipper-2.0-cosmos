import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { FC, ReactNode } from 'react';

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

const FormatRow: FC<{ rowAddress: string }> = ({ rowAddress }) => {
  const { name, address, imageUrl } = useProfileRecoil(rowAddress);
  return <AvatarName address={address} imageUrl={imageUrl} name={name} />;
};

export const formatRows = (data: string[]) =>
  data.map((x, i): { [key: string]: ReactNode } => ({
    // eslint-disable-next-line react/no-array-index-key
    validator: <FormatRow key={`${i}-${x}`} rowAddress={x} />,
  }));
