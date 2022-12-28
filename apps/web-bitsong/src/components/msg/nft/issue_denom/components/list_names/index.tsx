import Name from '@/components/name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const CreatorName: FC<{ address: string; i: number; addresses: string[] }> = (props) => {
  const { address, i, addresses } = props;
  const { t } = useTranslation('transactions');
  const creator = useProfileRecoil(address);

  if (!creator) {
    return null;
  }

  let suffix = '';

  if (i === addresses.length - 2) {
    suffix = ` ${t('and')} `;
  } else if (i !== addresses.length - 1 && addresses.length > 1) {
    suffix = ', ';
  }

  return (
    <React.Fragment key={creator.address}>
      <Name address={creator.address} name={creator.name} />
      {suffix}
    </React.Fragment>
  );
};

const ListNames = (props: { creators: string[] }) => {
  const { creators } = props;
  return (
    <>
      {creators.map((x, i) => (
        <CreatorName key={x} address={x} i={i} addresses={creators} />
      ))}
    </>
  );
};

export default ListNames;
