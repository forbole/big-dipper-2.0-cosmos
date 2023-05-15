import { FC } from 'react';
import numeral from 'numeral';
import useAppTranslation from '@/hooks/useAppTranslation';
import BoxDetails from '@/components/box_details';
import type { StatsType } from '@/screens/token_details/types';

const Stats: FC<{ className?: string; stats: StatsType }> = (props) => {
  const { t } = useAppTranslation('tokens');

  const details = [
    {
      key: 'identifier',
      label: t('identifier'),
      detail: props.stats.identifier,
    },
    {
      key: 'supply',
      label: t('supply'),
      detail: numeral(props.stats.supply).format('0,0'),
    },
    {
      key: 'accounts',
      label: t('accounts'),
      detail: numeral(props.stats.accounts).format('0,0'),
    },
    {
      key: 'transactions',
      label: t('transactions'),
      detail: numeral(props.stats.transactions).format('0,0'),
    },
  ];

  return (
    <BoxDetails className={props.className} title={t('stats') ?? undefined} details={details} />
  );
};

export default Stats;
