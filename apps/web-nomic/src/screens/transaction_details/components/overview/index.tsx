import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import Link from 'next/link';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import Typography from '@material-ui/core/Typography';
import { useRecoilValue } from 'recoil';
import { readDate } from '@/recoil/settings';
import useTranslation from 'next-translate/useTranslation';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import BoxDetails from '@/components/box_details';
import { formatNumber } from '@/utils/format_token';
import { useStyles } from '@/screens/transaction_details/components/overview/styles';
import type { OverviewType } from '@/screens/transaction_details/types';

const Overview: React.FC<{
  className?: string;
  data: OverviewType;
}> = ({ className, data }) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const dateFormat = useRecoilValue(readDate);

  const details = [
    {
      label: t('hash'),
      detail: data.hash,
    },
    {
      label: t('height'),
      detail: (
        <Link href={BLOCK_DETAILS(data.height)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(data.height).format('0,0')}
          </Typography>
        </Link>
      ),
    },
    {
      label: t('time'),
      detail: formatDayJs((dayjs as any).utc(data.timestamp), dateFormat),
    },
    {
      label: t('fee'),
      detail: `${formatNumber(
        data.fee.value,
        data.fee.exponent
      )} ${data?.fee?.displayDenom?.toUpperCase()}`,
    },
    {
      label: t('gas'),
      detail: `${numeral(data.gas).format('0,0.[00]')} `,
    },
    {
      className: 'memo',
      label: t('memo'),
      detail: data.memo,
    },
  ];

  return (
    <BoxDetails
      className={classnames(className, classes.root)}
      title={t('overview')}
      details={details}
    />
  );
};

export default Overview;
