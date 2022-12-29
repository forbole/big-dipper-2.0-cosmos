import chainConfig from '@/chainConfig';
import AvatarName from '@/components/avatar_name';
import BoxDetails from '@/components/box_details';
import Result from '@/components/result';
import { readDate } from '@/recoil/settings';
import { useStyles } from '@/screens/transaction_details/components/overview/styles';
import type { OverviewType } from '@/screens/transaction_details/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { formatNumber } from '@/utils/format_token';
import { getShardDisplay } from '@/utils/get_shard_display';
import { MINIBLOCK_DETAILS } from '@/utils/go_to_page';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

const { primaryTokenUnit } = chainConfig();

const Overview: FC<OverviewType & ComponentDefault> = (props) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const dateFormat = useRecoilValue(readDate);
  const senderShard = getShardDisplay(props.fromShard);
  const receiverShard = getShardDisplay(props.toShard);

  const details = [
    {
      key: 'hash',
      label: t('hash'),
      detail: props.hash,
    },
    {
      key: 'status',
      label: t('status'),
      detail: <Result status={props.status} />,
    },
    {
      key: 'miniblockHash',
      label: t('miniblockHash'),
      detail: (
        <Link href={MINIBLOCK_DETAILS(props.miniblockHash)} passHref>
          <Typography variant="body1" component="a">
            {props.miniblockHash}
          </Typography>
        </Link>
      ),
    },
    {
      key: 'shardFrom',
      label: (
        <div>
          <Typography component="span">{t('from')}</Typography>{' '}
          <Typography component="span" className={classes.shard}>
            (
            {t(`common:${senderShard.key}`, {
              num: senderShard.num,
            })}
            )
          </Typography>
        </div>
      ),
      detail: <AvatarName address={props.from} name={props.from} />,
    },
    {
      key: 'shardTo',
      label: (
        <div>
          <Typography component="span">{t('to')}</Typography>{' '}
          <Typography component="span" className={classes.shard}>
            (
            {t(`common:${receiverShard.key}`, {
              num: receiverShard.num,
            })}
            )
          </Typography>
        </div>
      ),
      detail: <AvatarName address={props.to} name={props.to} />,
    },
    {
      key: 'tokenPrice',
      label: t('tokenPrice', { token: primaryTokenUnit.toUpperCase() }),
      detail: `$${props.price}`,
    },
    {
      key: 'gasUsedLimit',
      label: t('gasUsedLimit'),
      detail: `${numeral(props.gasUsed).format('0,0')} / ${numeral(props.gasLimit).format('0,0')}`,
    },
    {
      key: 'gasPrice',
      label: t('gasPrice'),
      detail: `${formatNumber(
        props.gasPrice.value,
        props.gasPrice.exponent
      )} ${props.gasPrice.displayDenom.toUpperCase()}`,
    },
    {
      key: 'time',
      label: t('time'),
      detail: formatDayJs(dayjs.utc(dayjs.unix(props.timestamp)), dateFormat),
    },
  ];

  return <BoxDetails className={props.className} title={t('overview')} details={details} />;
};

export default Overview;
