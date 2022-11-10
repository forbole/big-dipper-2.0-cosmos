import React from 'react';
import numeral from 'numeral';
// import dayjs, { formatDayJs } from 'ui/utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
// import { useRecoilValue } from 'recoil';
// import { readDate } from '@recoil/settings';
import BoxDetails from 'ui/components/box_details';
import { OverviewType } from '../../types';

const Overview: React.FC<OverviewType & ComponentDefault> = (props, { className }) => {
  const { t } = useTranslation('blocks');
  // const dateFormat = useRecoilValue(readDate);

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
          detail: `0x${props.hash}`,
        },
        {
          label: t('parentId'),
          detail: `0x${props.parentId}`,
        },
        {
          label: t('time'),
          // detail: formatDayJs(dayjs.utc(props.timestamp), dateFormat),
          detail: props.timestamp,
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
