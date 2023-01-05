import BoxDetails from '@/components/box_details';
import Result from '@/components/result';
import { readDate } from '@/recoil/settings';
import useStyles from '@/screens/transaction_details/components/overview/styles';
import type { OverviewType } from '@/screens/transaction_details/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { formatNumber } from '@/utils/format_token';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Typography from '@mui/material/Typography';
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
        <Link href={BLOCK_DETAILS(data.height)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(data.height).format('0,0')}
          </Typography>
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
      detail: `${numeral(data.gasUsed).format('0,0.[00]')} / ${numeral(data.gasWanted).format(
        '0,0.[00]'
      )}`,
    },
    {
      key: 'result',
      label: t('result'),
      detail: <Result success={data.success} />,
    },
    {
      className: 'memo',
      key: 'memo',
      label: t('memo'),
      detail: data.memo,
    },
  ];

  if (!data.success) {
    details.push({
      className: 'memo',
      key: 'error',
      label: t('error'),
      detail: data.error,
    });
  }

  return (
    <BoxDetails className={cx(className, classes.root)} title={t('overview')} details={details} />
  );
};

export default Overview;
