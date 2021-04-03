import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  TransactionsList,
  Box,
} from '@components';
import { useBlockContext } from '../../contexts/block';
import { useStyles } from './styles';

const Transactions: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const { uiData } = useBlockContext();
  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.header}>
        <Typography variant="h2">{t('transactions')}</Typography>
      </div>
      <TransactionsList
        items={uiData.transactions}
        itemCount={uiData.transactions.length}
        className={classes.list}
      />
    </Box>

  );
};

export default Transactions;
