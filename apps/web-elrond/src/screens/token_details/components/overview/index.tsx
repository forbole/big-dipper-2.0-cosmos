import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import BoxDetails from 'ui/components/box_details';
import AvatarName from '@components/avatar_name';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { OverviewType } from '../../types';

const Overview: React.FC<{ overview: OverviewType } & ComponentDefault> = (props) => {
  const { t } = useTranslation('tokens');

  const details = [
    {
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
      label: t('decimals'),
      detail: props.overview.decimals,
    },
    {
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
      label: t('email'),
      detail: props.overview.email || '-',
    },
  ];

  return <BoxDetails className={props.className} title={t('overview')} details={details} />;
};

export default Overview;
