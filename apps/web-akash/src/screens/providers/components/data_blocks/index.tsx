import SingleBlock from '@/screens/providers/components/data_blocks/components/single_block';
import { useStyles } from '@/screens/providers/components/data_blocks/styles';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import React from 'react';

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
