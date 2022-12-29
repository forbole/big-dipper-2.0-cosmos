import BoxDetails from '@/components/box_details';
import { readDate } from '@/recoil/settings';
import type { OverviewType } from '@/screens/miniblock_details/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { getShardDisplay } from '@/utils/get_shard_display';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

const Overview: FC<OverviewType & ComponentDefault> = (props) => {
  const { t } = useTranslation('blocks');
  const dateFormat = useRecoilValue(readDate);
  const senderShard = getShardDisplay(props.senderShard);
  const receiverShard = getShardDisplay(props.receiverShard);

  const details = [
    {
      key: 'hash',
      label: t('hash'),
      detail: props.hash,
    },
    {
      key: 'senderShard',
      label: t('senderShard'),
      detail: t(senderShard.key, {
        num: senderShard.num,
      }),
    },
    {
      key: 'receiverShard',
      label: t('receiverShard'),
      detail: t(receiverShard.key, {
        num: receiverShard.num,
      }),
    },
    {
      key: 'senderBlockHash',
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
      key: 'receiverBlockHash',
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
      key: 'time',
      label: t('time'),
      detail: formatDayJs(dayjs.utc(dayjs.unix(props.timestamp)), dateFormat),
    },
    {
      key: 'type',
      label: t('type'),
      detail: props.type,
    },
  ];

  return <BoxDetails className={props.className} title={t('overview')} details={details} />;
};

export default Overview;
