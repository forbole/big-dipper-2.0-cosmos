import { FC } from 'react';
import { AvatarNameProps } from '@/components/avatar_name/types';
import AvatarNameBase from 'ui/src/components/avatar_name';

const AvatarName: FC<AvatarNameProps> = ({ displayAddress, ...props }) => {
  const noLink = ['delegationRow', 'unbondingRow', 'redelegationRow'].includes(
    props.location as string
  );

  const adx = displayAddress || props.address;

  return <AvatarNameBase noLink={noLink} {...props} address={adx} />;
};

export default AvatarName;
