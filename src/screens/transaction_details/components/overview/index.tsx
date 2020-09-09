import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import {
  BoxDetails,
  Result,
} from '@components';
import { BLOCK_DETAILS } from '@utils/go_to_page';

const Overview: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('transactions');
  const dummyProps = {
    title: t('overview'),
    details: [
      {
        label: t('slot'),
        detail: (
          <Link href={BLOCK_DETAILS(123)} passHref>
            <Typography variant="body1" className="value" component="a">
              100,000,000
            </Typography>
          </Link>
        ),
      },
      {
        label: t('result'),
        detail: (
          <Result />
        ),
      },
      {
        label: t('confirmations'),
        detail: 'MAX',
      },
      {
        label: t('fee'),
        detail: '0.001',
      },
      {
        label: t('signature'),
        detail: '2mGBpvVcxhLXpnTEeDj4aV1SvVCnXcPKroj3idjnri7TwcR4W2UVUkjEUAHk5fL4Wh3EXiwXLw3cDBe6Rbn8sjUU',
      },
    ],
  };

  return (
    <BoxDetails className={className} {...dummyProps} />
  );
};

export default Overview;
