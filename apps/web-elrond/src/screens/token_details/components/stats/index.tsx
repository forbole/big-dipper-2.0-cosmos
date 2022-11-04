import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import BoxDetails from '@components/box_details';
import { StatsType } from '../../types';

const Stats: React.FC<{ stats: StatsType } & ComponentDefault> = (props) => {
  const { t } = useTranslation('tokens');

  const details = [
    {
      label: t('identifier'),
      detail: props.stats.identifier,
    },
    {
      label: t('supply'),
      detail: numeral(props.stats.supply).format('0,0'),
    },
    {
      label: t('accounts'),
      detail: numeral(props.stats.accounts).format('0,0'),
    },
    {
      label: t('transactions'),
      detail: numeral(props.stats.transactions).format('0,0'),
    },
  ];

  return <BoxDetails className={props.className} title={t('stats')} details={details} />;
};

export default Stats;
