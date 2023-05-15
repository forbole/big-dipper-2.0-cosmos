import { FC } from 'react';
import useAppTranslation from '@/hooks/useAppTranslation';
import { useRecoilValue } from 'recoil';
import BoxDetails from '@/components/box_details';
import AvatarName from '@/components/avatar_name';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { readDate, readTimeFormat } from '@/recoil/settings';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import type { OverviewType } from '@/screens/nft_details/types';

const Overview: FC<OverviewType & ComponentDefault> = (props) => {
  const { t } = useAppTranslation('nfts');
  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);

  const details = [
    {
      key: 'name',
      label: t('name'),
      detail: props.name,
    },
    {
      key: 'identifier',
      label: t('identifier'),
      detail: props.identifier,
    },
    {
      key: 'collection',
      label: t('collection'),
      detail: props.collection,
    },
    {
      key: 'type',
      label: t('type'),
      detail: props.type,
    },
    {
      key: 'creator',
      label: t('creator'),
      detail: (
        <AvatarName
          address={props.creator}
          name={getMiddleEllipsis(props.creator, {
            beginning: 13,
            ending: 15,
          })}
        />
      ),
    },
  ];

  if (props.owner) {
    details.push({
      key: 'owner',
      label: t('owner'),
      detail: (
        <AvatarName
          address={props.owner}
          name={getMiddleEllipsis(props.owner, {
            beginning: 13,
            ending: 15,
          })}
        />
      ),
    });
  }

  details.push(
    ...[
      {
        key: 'minted',
        label: t('minted'),
        detail: formatDayJs(dayjs.utc(dayjs.unix(props.minted)), dateFormat, timeFormat),
      },
    ]
  );

  return (
    <BoxDetails className={props.className} title={t('overview') ?? undefined} details={details} />
  );
};

export default Overview;
