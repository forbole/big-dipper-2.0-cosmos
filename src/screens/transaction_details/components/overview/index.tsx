import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { BoxDetails } from '@components';
import { useTransactionContext } from '../../contexts/transaction';
import { useStyles } from './styles';

const Overview: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const { uiData } = useTransactionContext();

  return (
    <BoxDetails
      className={classnames(className, classes.root)}
      title={t('overview')}
      details={uiData.transaction}
    />
  );
};

export default Overview;
