import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import { SingleBlock } from './components';
import { useStyles } from './styles';
import { useDataBlocks } from './hooks';

const DataBlocks: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const { t } = useTranslation('providers');
  const classes = useStyles();
  const { state } = useDataBlocks();
  const data = [
    {
      key: t('activeProviders'),
      value: numeral(state.blockHeight).format('0,0'),
      className: classes.activeProviders,
    },
    {
      key: t('activeLeases'),
      value: state.price !== null ? `$${numeral(state.price).format('0.00')}` : 'N/A',
      className: classes.activeLeases,
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
