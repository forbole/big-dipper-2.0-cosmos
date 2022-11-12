import React from 'react';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import BoxDetails from 'ui/components/box_details';
import dayjs, { formatDayJs } from 'ui/utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { getShardDisplay } from '@utils/get_shard_display';
import { OverviewType } from '../../types';

const Overview: React.FC<OverviewType & ComponentDefault> = (props) => {
  const { t } = useTranslation('blocks');
  const dateFormat = useRecoilValue(readDate);
  const shard = getShardDisplay(props.shard);

  const details = [
    {
      label: t('block'),
      detail: (
        <Typography variant="body1" className="value">
          {numeral(props.block).format('0,0')}
        </Typography>
      ),
    },
    {
      label: t('hash'),
      detail: props.hash,
    },
    {
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
      label: t('txs'),
      detail: (
        <Typography variant="body1" className="value">
          {numeral(props.txs).format('0,0')}
        </Typography>
      ),
    },
    {
      label: t('time'),
      detail: formatDayJs((dayjs as any).utc(dayjs.unix(props.timestamp)), dateFormat),
    },
    {
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
      label: t('size'),
      detail: (
        <Typography variant="body1" className="value">
          {/* {formatBytes(props.size)} */}
          {props.size / 1000} kB
        </Typography>
      ),
    },
    {
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
      label: t('gasRefunded'),
      detail: numeral(props.gasRefunded).format('0,0'),
    });
  }

  if (props.gasPenalized) {
    details.push({
      label: t('gasPenalized'),
      detail: numeral(props.gasPenalized).format('0,0'),
    });
  }

  return <BoxDetails className={props.className} title={t('overview')} details={details} />;
};

export default Overview;
