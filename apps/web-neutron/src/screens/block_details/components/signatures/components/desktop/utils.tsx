import { FC } from 'react';
import AvatarName from '@/components/avatar_name';
import useValidatorConsensusAddressesList from '@/hooks/useValidatorConsensusAddressesList';
import { VALIDATOR_DETAILS } from '@/utils/go_to_page';

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
  const { profile } = useValidatorConsensusAddressesList(rowAddress);
  return (
    <AvatarName
      address={profile?.address ?? ''}
      imageUrl={profile?.imageUrl ?? ''}
      name={profile?.name ?? ''}
      href={VALIDATOR_DETAILS}
    />
  );
};

export const formatRows = (data: string[]) =>
  data.map((x) => ({
    validator: <FormatRow key={x} rowAddress={x} />,
  }));
