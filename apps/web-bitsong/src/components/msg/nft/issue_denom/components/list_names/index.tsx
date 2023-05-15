import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import Name from '@/components/name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

type CreatorNameProps = {
  address: string;
  addresses: string[];
  isLast: boolean;
  is2ndLast: boolean;
};

const CreatorName: FC<CreatorNameProps> = (props) => {
  const { address: theAddress, addresses, isLast, is2ndLast } = props;
  const { t } = useAppTranslation('transactions');
  const { address, name } = useProfileRecoil(theAddress);

  let suffix = '';

  if (is2ndLast) {
    suffix = ` ${t('and')} `;
  } else if (!isLast && addresses.length > 1) {
    suffix = ', ';
  }

  return (
    <>
      <Name address={address} name={name} />
      {suffix}
    </>
  );
};

const ListNames = (props: { creators: string[] }) => {
  const { creators } = props;
  return (
    <>
      {creators.map((x, i) => (
        <CreatorName
          key={x}
          address={x}
          addresses={creators}
          isLast={i === creators.length - 1}
          is2ndLast={i === creators.length - 2}
        />
      ))}
    </>
  );
};

export default ListNames;
