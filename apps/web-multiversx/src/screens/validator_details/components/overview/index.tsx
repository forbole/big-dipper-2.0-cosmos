import { FC } from 'react';
import useAppTranslation from '@/hooks/useAppTranslation';
import BoxDetails from '@/components/box_details';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import type { OverviewType } from '@/screens/validator_details/types';

const Overview: FC<{ className?: string; overview: OverviewType }> = (props) => {
  const { t } = useAppTranslation('validators');
  const details = [];

  props.overview.stakeDistribution.forEach((x) => {
    const key = getMiddleEllipsis(x.key, {
      beginning: 10,
      ending: 7,
    });
    details.push({
      key: `distribution-${x.key}`,
      label: `${t('distribution')} (${key})`,
      detail: `${x.value}`,
    });
  });

  if (props.overview.stakeDistribution.length <= 2) {
    details.push({
      key: 'website',
      label: t('website'),
      detail: props.overview.website ? (
        <a href={props.overview.website} target="_blank" rel="noreferrer">
          {props.overview.website}
        </a>
      ) : (
        '-'
      ),
    });
  }

  if (props.overview.stakeDistribution.length <= 1) {
    details.push({
      key: 'location',
      label: t('location'),
      detail: props.overview.location || '-',
    });
  }

  if (props.overview.stakeDistribution.length <= 0) {
    details.push({
      key: 'identity',
      label: t('identity'),
      detail: props.overview.identity || '-',
    });
  }

  return (
    <BoxDetails className={props.className} title={t('overview') ?? undefined} details={details} />
  );
};

export default Overview;
