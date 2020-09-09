import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { BoxDetails } from '@components';

const Market: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('tokens');

  const dummyProps = {
    title: t('market'),
    details: [
      {
        label: t('price'),
        detail: '$2.52',
      },
      {
        label: t('marketCap'),
        detail: '$76,350,191',
      },
      {
        label: t('holders'),
        detail: '1,280,390',
      },
      {
        label: t('transactions'),
        detail: '1,280,390',
      },
      {
        label: t('supply'),
        detail: '291,902.98',
      },
    ],
  };
  return (
    <BoxDetails className={className} {...dummyProps} />
  );
};

export default Market;
