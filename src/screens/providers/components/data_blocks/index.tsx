import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import { SingleBlock } from './components';
import { useStyles } from './styles';
import { useDataBlocks } from './hooks';

const DataBlocks: React.FC<{
  className?: string;
  providers: number;
  leases: number;
}> = ({
  className,
  providers,
  leases,
}) => {
  const { t } = useTranslation('providers');
  const classes = useStyles();
  const { state } = useDataBlocks();
  const data = [
    {
      key: t('activeProviders'),
      value: numeral(state.blockHeight).format('0,0'),
      // value: numeral(providers).format('0,0'),
      className: classes.activeProviders,
    },
    {
      key: t('activeLeases'),
      value: state.price !== null ? `$${numeral(state.price).format('0.00')}` : 'N/A',
      // value: numeral(leases).format('0,0'),
      className: classes.activeLeases,
    },
  ];

  console.log('data blocks', providers, leases);

  return (
    <div className={classnames(classes.root, className)}>
      {data.map((x) => (
        <SingleBlock
          key={x.key}
          label={x.key}
          value={x.value}
          className={x.className}
        />
      ))}
    </div>
  );
};

export default DataBlocks;
