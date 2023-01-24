import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import numeral from 'numeral';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import AvatarName from '@/components/avatar_name';
import BoxDetails from '@/components/box_details';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { readDate } from '@/recoil/settings';
import type { OverviewType } from '@/screens/block_details/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';

const Overview: FC<OverviewType & ComponentDefault> = (props, { className }) => {
  const { address, imageUrl, name } = useProfileRecoil(props.proposer);
  const { t } = useTranslation('blocks');
  const dateFormat = useRecoilValue(readDate);

  return (
    <BoxDetails
      className={className}
      title={t('overview')}
      details={[
        {
          key: 'height',
          label: t('height'),
          detail: (
            <Typography variant="body1" className="value">
              {numeral(props.height).format('0,0')}
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
          detail: <AvatarName address={address} imageUrl={imageUrl} name={name} />,
        },
        {
          key: 'time',
          label: t('time'),
          detail: formatDayJs(dayjs.utc(props.timestamp), dateFormat),
        },
        {
          key: 'txs',
          label: t('txs'),
          detail: numeral(props.txs).format('0,0'),
        },
      ]}
    />
  );
};

export default Overview;
