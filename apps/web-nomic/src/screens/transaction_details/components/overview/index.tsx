import BoxDetails from '@/components/box_details';
import { readDate } from '@/recoil/settings';
import useStyles from '@/screens/transaction_details/components/overview/styles';
import type { OverviewType } from '@/screens/transaction_details/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { formatNumber } from '@/utils/format_token';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

type OverviewProps = {
  className?: string;
  data: OverviewType;
};

const Overview: FC<OverviewProps> = ({ className, data }) => {
  const { t } = useTranslation('transactions');
  const { classes, cx } = useStyles();
  const dateFormat = useRecoilValue(readDate);

  const details = [
    {
      key: 'hash',
      label: t('hash'),
      detail: data.hash,
    },
    {
      key: 'height',
      label: t('height'),
      detail: (
        <Link shallow prefetch={false} href={BLOCK_DETAILS(data.height)} className="value">
          {numeral(data.height).format('0,0')}
        </Link>
      ),
    },
    {
      key: 'time',
      label: t('time'),
      detail: formatDayJs(dayjs.utc(data.timestamp), dateFormat),
    },
    {
      key: 'fee',
      label: t('fee'),
      detail: `${formatNumber(
        data.fee.value,
        data.fee.exponent
      )} ${data?.fee?.displayDenom?.toUpperCase()}`,
    },
    {
      key: 'gas',
      label: t('gas'),
      detail: `${numeral(data.gas).format('0,0.[00]')} `,
    },
    {
      key: 'memo',
      className: 'memo',
      label: t('memo'),
      detail: data.memo,
    },
  ];

  return (
    <BoxDetails className={cx(classes.root, className)} title={t('overview')} details={details} />
  );
};

export default Overview;
