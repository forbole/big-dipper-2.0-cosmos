import { FC } from 'react';
import useAppTranslation from '@/hooks/useAppTranslation';
import Typography from '@mui/material/Typography';
import BoxDetails from '@/components/box_details';
import AvatarName from '@/components/avatar_name';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import type { OverviewType } from '@/screens/token_details/types';

const Overview: FC<{ className?: string; overview: OverviewType }> = (props) => {
  const { t } = useAppTranslation('tokens');

  const details = [
    {
      key: 'owner',
      label: t('owner'),
      detail: (
        <AvatarName
          address={props.overview.owner}
          name={getMiddleEllipsis(props.overview.owner, {
            beginning: 10,
            ending: 10,
          })}
        />
      ),
    },
    {
      key: 'decimals',
      label: t('decimals'),
      detail: props.overview.decimals,
    },
    {
      key: 'website',
      label: t('website'),
      detail: props.overview.website ? (
        <Typography component="a" href={props.overview.website} target="_blank" rel="noreferrer">
          {props.overview.website}
        </Typography>
      ) : (
        '-'
      ),
    },
    {
      key: 'email',
      label: t('email'),
      detail: props.overview.email || '-',
    },
  ];

  return (
    <BoxDetails className={props.className} title={t('overview') ?? undefined} details={details} />
  );
};

export default Overview;
