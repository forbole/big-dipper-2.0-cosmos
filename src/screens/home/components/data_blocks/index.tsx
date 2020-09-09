import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { SingleBlock } from './components';
import { useStyles } from './styles';

const DataBlocks: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const { t } = useTranslation('home');
  const classes = useStyles();

  const fakeData = [
    {
      key: t('latestBlock'),
      value: '0',
      className: classes.blockHeight,
    },
    {
      key: t('averageBlockTime'),
      value: '0 s',
      className: classes.blockTime,
    },
    {
      key: t('price'),
      value: '$5.00',
      className: classes.price,
    },
    {
      key: t('activeValidators'),
      value: '1000',
      description: t('outOfValidators', { count: '300' }),
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
