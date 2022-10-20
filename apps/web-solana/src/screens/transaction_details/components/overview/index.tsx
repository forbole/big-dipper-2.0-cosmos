import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import Link from 'next/link';
import dayjs, { formatDayJs } from '@utils/dayjs';
import { Typography } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import useTranslation from 'next-translate/useTranslation';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import {
  BoxDetails, Result,
} from '@components';
import { useStyles } from './styles';
import { OverviewType } from '../../types';

const Overview: React.FC<{
  className?: string;
  data: OverviewType;
}> = ({
  className, data,
}) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const dateFormat = useRecoilValue(readDate);

  const details = [
    {
      label: t('slot'),
      detail: (
        <Link href={BLOCK_DETAILS(data.slot)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(data.slot).format('0,0')}
          </Typography>
        </Link>
      ),
    },
    {
      label: t('signature'),
      detail: data.signature,
    },
    {
      label: t('result'),
      detail: (
        <Result success={data.success} />
      ),
    },
    {
      label: t('fee'),
      detail: `${data.fee.value} ${data.fee.displayDenom.toUpperCase()}`,
    },
    {
      label: t('time'),
      detail: formatDayJs(dayjs.utc(data.timestamp), dateFormat),
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
