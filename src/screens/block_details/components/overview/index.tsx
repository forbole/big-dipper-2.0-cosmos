import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import dayjs from 'dayjs';
import {
  BoxDetails,
  AvatarName,
} from '@components';
import { useBlockContext } from '../../contexts/block';

const Overview: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('blocks');
  const { item } = useBlockContext();
  const dummyProps = {
    title: t('overview'),
    details: [
      {
        label: t('height'),
        detail: item.height,
      },
      {
        label: t('hash'),
        detail: item.hash,
      },
      {
        label: t('proposer'),
        detail: <AvatarName
          address="FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk"
          imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
          name="Forbole"
        />,
      },
      {
        label: t('time'),
        detail: dayjs(item.time).format('MMM D, YYYY HH:mm:ss'),
      },
      {
        label: t('signedVotingPower'),
        detail: item.signedVotingPower,
      },
      {
        label: t('txs'),
        detail: item.txs,
      },
    ],
  };
  return (
    <BoxDetails className={className} {...dummyProps} />
  );
};

export default Overview;
