import BoxDetails from '@/components/box_details';
import { readDate } from '@/recoil/settings';
import { useStyles } from '@/screens/transaction_details/components/overview/styles';
import type { OverviewType } from '@/screens/transaction_details/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { formatNumber } from '@/utils/format_token';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import React from 'react';
import { useRecoilValue } from 'recoil';

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
      detail: formatDayJs(dayjs.utc(data.timestamp), dateFormat),
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
