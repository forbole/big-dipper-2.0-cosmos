import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import { SingleBlock } from './components';
import { useStyles } from './styles';

const DataBlocks: React.FC<{
  className?: string;
  providers: number;
  leases: number;
}> = ({ className, providers, leases }) => {
  const { t } = useTranslation('providers');
  const classes = useStyles();
  const data = [
    {
      key: t('activeProviders'),
      value: numeral(providers).format('0,0'),
      className: classes.activeProviders,
    },
    {
      key: t('activeLeases'),
      value: numeral(leases).format('0,0'),
      className: classes.activeLeases,
    },
  ];

  return (
    <div className={classnames(classes.root, className)}>
      {data.map((x) => (
        <SingleBlock key={x.key} label={x.key} value={x.value} className={x.className} />
      ))}
    </div>
  );
};

export default DataBlocks;
