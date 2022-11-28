import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import BoxDetails from '@/components/box_details';
import type { StatsType } from '@/screens/node_details/types';

const Stats: React.FC<{ stats: StatsType } & ComponentDefault> = (props) => {
  const { t } = useTranslation('nodes');
  const details = [
    {
      label: t('ignoredSignatures'),
      detail: numeral(props.stats.ignoredSignatures).format('0,0'),
    },
    {
      label: t('leaderSuccess'),
      detail: numeral(props.stats.leaderSuccess).format('0,0'),
    },
    {
      label: t('leaderFailure'),
      detail: numeral(props.stats.leaderFailure).format('0,0'),
    },
    {
      label: t('validatorSuccess'),
      detail: numeral(props.stats.validatorSuccess).format('0,0'),
    },
    {
      label: t('validatorFailure'),
      detail: numeral(props.stats.validatorFailure).format('0,0'),
    },
  ];

  return (
    <BoxDetails className={classnames(props.className)} title={t('stats')} details={details} />
  );
};

export default Stats;
