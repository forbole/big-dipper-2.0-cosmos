import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import BoxDetails from 'ui/components/box_details';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { OverviewType } from '../../types';

const Overview: React.FC<{ overview: OverviewType } & ComponentDefault> = (props) => {
  const { t } = useTranslation('validators');
  const details = [];

  props.overview.stakeDistribution.forEach((x) => {
    const key = getMiddleEllipsis(x.key, {
      beginning: 10,
      ending: 7,
    });
    details.push({
      label: `${t('distribution')} (${key})`,
      detail: `${x.value}`,
    });
  });

  if (props.overview.stakeDistribution.length <= 2) {
    details.push({
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
      label: t('location'),
      detail: props.overview.location || '-',
    });
  }

  if (props.overview.stakeDistribution.length <= 0) {
    details.push({
      label: t('identity'),
      detail: props.overview.identity || '-',
    });
  }

  return <BoxDetails className={props.className} title={t('overview')} details={details} />;
};

export default Overview;
