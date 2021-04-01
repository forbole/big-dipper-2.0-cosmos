import React from 'react';
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
  const { uiData } = useDataBlocks();
  const fakeData = [
    {
      key: t('latestBlock'),
      value: uiData.blockHeight,
      className: classes.blockHeight,
    },
    {
      key: t('averageBlockTime'),
      value: uiData.blockTime,
      className: classes.blockTime,
    },
    {
      key: t('price'),
      value: uiData.price,
      className: classes.price,
    },
    {
      key: t('activeValidators'),
      value: uiData.validators.active,
      description: t('outOfValidators', { count: uiData.validators.total }),
      className: classes.validators,
    },
  ];

  return (
    <div className={classnames(classes.root, className)}>
      {fakeData.map((x) => (
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
