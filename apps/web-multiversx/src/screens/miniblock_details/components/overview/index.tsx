import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import BoxDetails from '@/components/box_details';
import { readDate, readTimeFormat } from '@/recoil/settings';
import type { OverviewType } from '@/screens/miniblock_details/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { getShardDisplay } from '@/utils/get_shard_display';
import { BLOCK_DETAILS } from '@/utils/go_to_page';

const Overview: FC<OverviewType & ComponentDefault> = (props) => {
  const { t } = useAppTranslation('blocks');
  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);
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
        <Link shallow prefetch={false} href={BLOCK_DETAILS(props.senderBlockHash)}>
          {props.senderBlockHash}
        </Link>
      ),
    },
    {
      key: 'receiverBlockHash',
      label: t('receiverBlockHash'),
      detail: (
        <Link shallow prefetch={false} href={BLOCK_DETAILS(props.receiverBlockHash)}>
          {props.receiverBlockHash}
        </Link>
      ),
    },
    {
      key: 'time',
      label: t('time'),
      detail: formatDayJs(dayjs.utc(dayjs.unix(props.timestamp)), dateFormat, timeFormat),
    },
    {
      key: 'type',
      label: t('type'),
      detail: props.type,
    },
  ];

  return (
    <BoxDetails className={props.className} title={t('overview') ?? undefined} details={details} />
  );
};

export default Overview;
