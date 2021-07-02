import React from 'react';
import numeral from 'numeral';
import dayjs, { formatDayJs } from '@utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useSettingsContext } from '@contexts';
import {
  BoxDetails, AvatarName,
} from '@components';
import { OverviewType } from '../../types';

const Overview: React.FC<OverviewType & ComponentDefault> = (props, { className }) => {
  const { t } = useTranslation('blocks');
  const {
    dateFormat,
  } = useSettingsContext();

  return (
    <BoxDetails
      className={className}
      title={t('overview')}
      details={[
        {
          label: t('height'),
          detail: (
            <Typography variant="body1" className="value">
              {numeral(props.height).format('0,0')}
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
            <AvatarName
              address={props.proposer.address}
              imageUrl={props.proposer.imageUrl}
              name={props.proposer.name}
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
