import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import BoxDetails from '@/components/box_details';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { useRecoilValue } from 'recoil';
import { readDate } from '@/recoil/settings';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import { getShardDisplay } from '@/utils/get_shard_display';
import type { OverviewType } from '@/screens/miniblock_details/types';

const Overview: React.FC<OverviewType & ComponentDefault> = (props) => {
  const { t } = useTranslation('blocks');
  const dateFormat = useRecoilValue(readDate);
  const senderShard = getShardDisplay(props.senderShard);
  const receiverShard = getShardDisplay(props.receiverShard);

  const details = [
    {
      label: t('hash'),
      detail: props.hash,
    },
    {
      label: t('senderShard'),
      detail: t(senderShard.key, {
        num: senderShard.num,
      }),
    },
    {
      label: t('receiverShard'),
      detail: t(receiverShard.key, {
        num: receiverShard.num,
      }),
    },
    {
      label: t('senderBlockHash'),
      detail: (
        <Link href={BLOCK_DETAILS(props.senderBlockHash)} passHref>
          <Typography variant="body1" component="a">
            {props.senderBlockHash}
          </Typography>
        </Link>
      ),
    },
    {
      label: t('receiverBlockHash'),
      detail: (
        <Link href={BLOCK_DETAILS(props.receiverBlockHash)} passHref>
          <Typography variant="body1" component="a">
            {props.receiverBlockHash}
          </Typography>
        </Link>
      ),
    },
    {
      label: t('time'),
      detail: formatDayJs((dayjs as any).utc(dayjs.unix(props.timestamp)), dateFormat),
    },
    {
      label: t('type'),
      detail: props.type,
    },
  ];

  return <BoxDetails className={props.className} title={t('overview')} details={details} />;
};

export default Overview;
