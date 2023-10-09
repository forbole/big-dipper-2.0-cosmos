import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import numeral from 'numeral';
import { useRecoilValue } from 'recoil';
import AvatarName from '@/components/avatar_name';
import BoxDetails from '@/components/box_details';
import { readDate, readTimeFormat } from '@/recoil/settings';
import type { OverviewType } from '@/screens/block_details/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import useValidatorConsensusAddressesList from '@/hooks/useValidatorConsensusAddressesList';
import { VALIDATOR_DETAILS } from '@/utils/go_to_page';
import { FC } from 'react';

const Overview: FC<OverviewType & ComponentDefault> = (props: any, { className }) => {
  const { t } = useAppTranslation('blocks');
  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);
  const { profile } = useValidatorConsensusAddressesList(props?.proposer);

  return (
    <BoxDetails
      className={className}
      title={t('overview') ?? undefined}
      details={[
        {
          key: 'height',
          label: t('height'),
          detail: (
            <Typography variant="body1" className="value">
              {numeral(props?.height).format('0,0')}
            </Typography>
          ),
        },
        {
          key: 'hash',
          label: t('hash'),
          detail: props?.hash,
        },
        {
          key: 'proposer',
          label: t('proposer'),
          detail: (
            <AvatarName
              address={profile?.address ?? ''}
              imageUrl={profile?.imageUrl ?? ''}
              name={profile?.name ?? ''}
              href={VALIDATOR_DETAILS}
            />
          ),
        },
        {
          key: 'time',
          label: t('time'),
          detail: formatDayJs(dayjs.utc(props?.timestamp ?? ''), dateFormat, timeFormat),
        },
        {
          key: 'txs',
          label: t('txs'),
          detail: numeral(props?.txs ?? '').format('0,0'),
        },
      ]}
    />
  );
};

export default Overview;
