import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { SingleBlock } from './components';
import { useStyles } from './styles';
import { useDataBlocks } from './hooks';

const DataBlocks: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const { t } = useTranslation('home');
  const classes = useStyles();
  const { state } = useDataBlocks();

  const data = [
    {
      key: t('latestSlot'),
      value: numeral(state.latestSlot).format('0,0'),
      className: classes.slotHeight,
    },
    {
      key: t('averageSlotTime'),
      value: `${numeral(state.averageSlotTime).format('0.00')} s`,
      className: classes.slotTime,
    },
    {
      key: t('price'),
      value: state.price !== null ? `$${numeral(state.price).format('0.00')}` : 'N/A',
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
    <div className={classnames(classes.root, className)}>
      {data.map((x) => (
        <SingleBlock
          key={x.key}
          label={x.key}
          value={x.value}
          description={x.description}
          className={x.className}
        />
      ))}
    </div>
  );
};

export default DataBlocks;
