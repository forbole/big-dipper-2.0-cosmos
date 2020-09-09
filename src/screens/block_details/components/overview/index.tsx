import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import dayjs from 'dayjs';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { Typography } from '@material-ui/core';
import {
  BoxDetails,
  AvatarName,
} from '@components';

const Overview: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('blocks');
  const dummyProps = {
    title: t('overview'),
    details: [
      {
        label: t('slot'),
        detail: '100,000,000',
      },
      {
        label: t('blockHash'),
        detail: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
      },
      {
        label: t('leader'),
        detail: <AvatarName
          address="FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk"
          imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
          name="Forbole"
        />,
      },
      {
        label: t('time'),
        detail: dayjs(1615187146246).format('MMM D, YYYY HH:mm:ss'),
      },
      {
        label: t('parentSlot'),
        detail: (
          <Link href={BLOCK_DETAILS(123)} passHref>
            <Typography variant="body1" className="value" component="a">
              100,000
            </Typography>
          </Link>
        ),
      },
      {
        label: t('parentBlockHash'),
        detail: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
      },
      {
        label: t('txs'),
        detail: '300 / 301',
      },
    ],
  };
  return (
    <BoxDetails className={className} {...dummyProps} />
  );
};

export default Overview;
