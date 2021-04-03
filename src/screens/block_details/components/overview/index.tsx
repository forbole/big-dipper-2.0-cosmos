import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { BoxDetails } from '@components';
import { useBlockContext } from '../../contexts/block';

const Overview: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('blocks');
  const { uiData } = useBlockContext();
  const details = {
    title: t('overview'),
    details: [
      ...uiData.block,
    ],
  };

  return (
    <BoxDetails className={className} {...details} />
  );
};

export default Overview;
