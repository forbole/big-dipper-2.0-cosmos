import { FC } from 'react';
import numeral from 'numeral';
import useAppTranslation from '@/hooks/useAppTranslation';
import BoxDetails from '@/components/box_details';
import type { StatsType } from '@/screens/node_details/types';

const Stats: FC<{ className?: string; stats: StatsType }> = (props) => {
  const { t } = useAppTranslation('nodes');
  const details = [
    {
      key: 'ignoredSignatures',
      label: t('ignoredSignatures'),
      detail: numeral(props.stats.ignoredSignatures).format('0,0'),
    },
    {
      key: 'leaderSuccess',
      label: t('leaderSuccess'),
      detail: numeral(props.stats.leaderSuccess).format('0,0'),
    },
    {
      key: 'leaderFailure',
      label: t('leaderFailure'),
      detail: numeral(props.stats.leaderFailure).format('0,0'),
    },
    {
      key: 'validatorSuccess',
      label: t('validatorSuccess'),
      detail: numeral(props.stats.validatorSuccess).format('0,0'),
    },
    {
      key: 'validatorFailure',
      label: t('validatorFailure'),
      detail: numeral(props.stats.validatorFailure).format('0,0'),
    },
  ];

  return (
    <BoxDetails className={props.className} title={t('stats') ?? undefined} details={details} />
  );
};

export default Stats;
