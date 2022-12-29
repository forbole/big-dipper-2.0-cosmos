import { readMarket } from '@/recoil/market';
import SingleBlock from '@/screens/home/components/data_blocks/components/single_block';
import { useDataBlocks } from '@/screens/home/components/data_blocks/hooks';
import { useStyles } from '@/screens/home/components/data_blocks/styles';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

const DataBlocks: FC<ComponentDefault> = (props) => {
  const { t } = useTranslation('home');
  const classes = useStyles();
  const marketState = useRecoilValue(readMarket);
  const { state } = useDataBlocks();

  const data = [
    {
      key: 'latestBlock',
      name: t('latestBlock'),
      value: numeral(state.blockHeight).format('0,0'),
      className: classes.blockHeight,
    },
    {
      key: 'transactions',
      name: t('transactions'),
      value: `${numeral(state.transactions).format('0,0')}`,
      className: classes.blockTime,
    },
    {
      key: 'price',
      name: t('price'),
      value: `$${numeral(marketState.price).format('0,0.00')}`,
      className: classes.price,
    },
    {
      key: 'activeValidators',
      name: t('activeValidators'),
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
          label={x.name}
          value={x.value}
          className={x.className}
          description={x.description}
        />
      ))}
    </div>
  );
};

export default DataBlocks;
