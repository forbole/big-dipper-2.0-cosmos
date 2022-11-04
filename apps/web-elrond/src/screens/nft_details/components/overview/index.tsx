import React from 'react';
import BoxDetails from '@components/box_details';
import AvatarName from '@components/avatar_name';
import dayjs, { formatDayJs } from '@utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { OverviewType } from '../../types';

const Overview: React.FC<OverviewType & ComponentDefault> = (props) => {
  const { t } = useTranslation('nfts');
  const dateFormat = useRecoilValue(readDate);

  const details = [
    {
      label: t('name'),
      detail: props.name,
    },
    {
      label: t('identifier'),
      detail: props.identifier,
    },
    {
      label: t('collection'),
      detail: props.collection,
    },
    {
      label: t('type'),
      detail: props.type,
    },
    {
      label: t('creator'),
      detail: (
        <AvatarName
          address={props.creator}
          name={getMiddleEllipsis(props.creator, {
            beginning: 13, ending: 15,
          })}
        />
      ),
    },
  ];

  if (props.owner) {
    details.push({
      label: t('owner'),
      detail: (
        <AvatarName
          address={props.owner}
          name={getMiddleEllipsis(props.owner, {
            beginning: 13, ending: 15,
          })}
        />
      ),
    });
  }

  details.push(...[
    {
      label: t('minted'),
      detail: formatDayJs(dayjs.utc(dayjs.unix(props.minted)), dateFormat),
    },
  ]);

  return (
    <BoxDetails
      className={props.className}
      title={t('overview')}
      details={details}
    />
  );
};

export default Overview;
