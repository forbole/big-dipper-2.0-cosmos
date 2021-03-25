import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import dayjs from 'dayjs';
import { Typography } from '@material-ui/core';
import {
  BoxDetails,
  Result,
} from '@components';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { useTransactionContext } from '../../contexts/transaction';
import { useStyles } from './styles';

const Overview: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('transactions');
  const { item } = useTransactionContext();
  const classes = useStyles();

  const dummyProps = {
    title: t('overview'),
    details: [
      {
        label: t('hash'),
        detail: item.hash,
      },
      {
        label: t('height'),
        detail: (
          <Link href={BLOCK_DETAILS(123)} passHref>
            <Typography variant="body1" className="value" component="a">
              {item.height}
            </Typography>
          </Link>
        ),
      },
      {
        label: t('time'),
        detail: dayjs(item.time).format('YYYY-MM-DD'),
      },
      {
        label: t('fee'),
        detail: item.fee,
      },
      {
        label: t('gas'),
        detail: '100 / 200',
      },
      {
        label: t('result'),
        detail: (
          <Result success={item.success} />
        ),
      },
      {
        className: classes.memo,
        label: t('memo'),
        detail: item.memo,
      },
    ],
  };

  return (
    <BoxDetails className={className} {...dummyProps} />
  );
};

export default Overview;
