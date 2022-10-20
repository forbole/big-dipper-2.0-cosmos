import React from 'react';
import numeral from 'numeral';
import dayjs, { formatDayJs } from '@utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { useProfileRecoil } from '@recoil/profiles';
import { readDate } from '@recoil/settings';
import {
  BoxDetails, AvatarName,
} from '@components';
import { OverviewType } from '../../types';

const Overview: React.FC<OverviewType & ComponentDefault> = (props, { className }) => {
  const leader = useProfileRecoil(props.leader);
  const { t } = useTranslation('blocks');
  const dateFormat = useRecoilValue(readDate);

  return (
    <BoxDetails
      className={className}
      title={t('overview')}
      details={[
        {
          label: t('slot'),
          detail: (
            <Typography variant="body1" className="value">
              {numeral(props.slot).format('0,0')}
            </Typography>
          ),
        },
        {
          label: t('hash'),
          detail: props.hash,
        },
        {
          label: t('leader'),
          detail: (
            <AvatarName
              address={props.leader}
              imageUrl={leader.imageUrl}
              name={leader.name}
            />
          ),
        },
        {
          label: t('time'),
          detail: formatDayJs(dayjs.utc(props.timestamp), dateFormat),
        },
        {
          label: t('txs'),
          detail: numeral(props.txs).format('0,0'),
        },
      ]}
    />
  );
};

export default Overview;
