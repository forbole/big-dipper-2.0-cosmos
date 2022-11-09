import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import { useRecoilValue } from 'recoil';
import { readMarket } from '@recoil/market/elrond';
import useTranslation from 'next-translate/useTranslation';
import { SingleBlock } from './components';
import { useStyles } from './styles';
import { useDataBlocks } from './hooks';

const DataBlocks: React.FC<ComponentDefault> = (props) => {
  const { t } = useTranslation('home');
  const classes = useStyles();
  const marketState = useRecoilValue(readMarket);
  const { state } = useDataBlocks();

  const data = [
    {
      key: t('latestBlock'),
      value: numeral(state.blockHeight).format('0,0'),
      className: classes.blockHeight,
    },
    {
      key: t('transactions'),
      value: `${numeral(state.transactions).format('0,0')}`,
      className: classes.blockTime,
    },
    {
      key: t('price'),
      value: `$${numeral(marketState.price).format('0,0.00')}`,
      className: classes.price,
    },
    {
      key: t('activeValidators'),
      value: numeral(state.validators.active).format('0,0'),
      description: t('outOfValidators', {
        count: numeral(state.validators.total).format('0,0'),
      }),
      className: classes.validators,
    },
  ];

  return (
    <div className={classnames(classes.root, props.className)}>
      {data.map((x) => (
        <SingleBlock
          key={x.key}
          label={x.key}
          value={x.value}
          className={x.className}
          description={x.description}
        />
      ))}
    </div>
  );
};

export default DataBlocks;
