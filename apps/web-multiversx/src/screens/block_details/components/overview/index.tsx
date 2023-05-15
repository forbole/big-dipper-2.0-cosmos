import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import numeral from 'numeral';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import BoxDetails from '@/components/box_details';
import { readDate, readTimeFormat } from '@/recoil/settings';
import type { OverviewType } from '@/screens/block_details/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { getShardDisplay } from '@/utils/get_shard_display';

const Overview: FC<OverviewType & ComponentDefault> = (props) => {
  const { t } = useAppTranslation('blocks');
  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);
  const shard = getShardDisplay(props.shard);

  const details = [
    {
      key: 'block',
      label: t('block'),
      detail: (
        <Typography variant="body1" className="value">
          {numeral(props.block).format('0,0')}
        </Typography>
      ),
    },
    {
      key: 'hash',
      label: t('hash'),
      detail: props.hash,
    },
    {
      key: 'proposer',
      label: t('proposer'),
      detail: (
        <Typography variant="body1" className="value">
          {getMiddleEllipsis(props.proposer, {
            beginning: 13,
            ending: 15,
          })}
        </Typography>
      ),
    },
    {
      key: 'txs',
      label: t('txs'),
      detail: (
        <Typography variant="body1" className="value">
          {numeral(props.txs).format('0,0')}
        </Typography>
      ),
    },
    {
      key: 'time',
      label: t('time'),
      detail: formatDayJs(dayjs.utc(dayjs.unix(props.timestamp)), dateFormat, timeFormat),
    },
    {
      key: 'shard',
      label: t('shard'),
      detail: (
        <Typography variant="body1" className="value">
          {t(shard.key, {
            num: shard.num,
          })}
        </Typography>
      ),
    },
    {
      key: 'size',
      label: t('size'),
      detail: (
        <Typography variant="body1" className="value">
          {/* {formatBytes(props.size)} */}
          {props.size / 1000} kB
        </Typography>
      ),
    },
    {
      key: 'gasUsedLimit',
      label: t('gasUsedLimit'),
      detail: (
        <Typography variant="body1" className="value">
          {numeral(props.gasUsed).format('0,0')} / {numeral(props.gasProvided).format('0,0')}
        </Typography>
      ),
    },
  ];

  if (props.gasRefunded) {
    details.push({
      key: 'gasRefunded',
      label: t('gasRefunded'),
      detail: numeral(props.gasRefunded).format('0,0'),
    });
  }

  if (props.gasPenalized) {
    details.push({
      key: 'gasPenalized',
      label: t('gasPenalized'),
      detail: numeral(props.gasPenalized).format('0,0'),
    });
  }

  return (
    <BoxDetails className={props.className} title={t('overview') ?? undefined} details={details} />
  );
};

export default Overview;
