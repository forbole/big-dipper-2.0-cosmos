import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import { BoxDetails } from '@components';
import { MarketType } from '../../types';

const Market: React.FC<{market: MarketType} & ComponentDefault> = (props, { className }) => {
  const { t } = useTranslation('accounts');

  return (
    <BoxDetails
      className={className}
      title={t('market')}
      details={[
        {
          label: t('price'),
          detail: `$${numeral(props.market.price).format('0,0.00')}`,
        },
        {
          label: t('marketCap'),
          detail: `$${numeral(props.market.marketCap).format('0,0.00')}`,
        },
        {
          label: t('supply'),
          detail: numeral(props.market.supply).format('0,0'),
        },
        {
          label: t('holders'),
          detail: numeral(props.market.holders).format('0,0'),
        },
      ]}
    />
  );
};

export default Market;
