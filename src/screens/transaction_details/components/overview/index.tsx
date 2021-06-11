import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import Link from 'next/link';
import dayjs from '@utils/dayjs';
import { Typography } from '@material-ui/core';
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

  return (
    <BoxDetails
      className={classnames(className, classes.root)}
      title={t('overview')}
      details={[
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
          detail: dayjs.utc(data.timestamp).local().format('MMMM DD, YYYY hh:mm A'),
        },
        {
          label: t('fee'),
          detail: `${numeral(data.fee.value).format('0,0.[0000]')} ${data.fee.denom.toUpperCase()}`,
        },
        {
          label: t('gas'),
          detail: `${numeral(data.gasUsed).format('0,0.[00]')} / ${numeral(data.gasWanted).format('0,0.[00]')}`,
        },
        {
          label: t('result'),
          detail: (
            <Result success={data.success} />
          ),
        },
        {
          className: 'memo',
          label: t('memo'),
          detail: data.memo,
        },
      ]}
    />
  );
};

export default Overview;
