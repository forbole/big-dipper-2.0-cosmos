import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  TransactionListDetails,
  Box,
} from '@components';
import { useStyles } from './styles';
import { TransactionType } from '../../types';

const Transactions: React.FC<{
  className?: string;
  data: TransactionType[];
  loadNextPage: () => void;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
}> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const loadMoreItems = props.isNextPageLoading ? () => null : props.loadNextPage;
  const isItemLoaded = (index) => !props.hasNextPage || index < props.data.length;
  const itemCount = props.hasNextPage ? props.data.length + 1 : props.data.length;

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {t('transactions')}
      </Typography>
      <div className={classes.list}>
        <TransactionListDetails
          transactions={props.data}
          itemCount={itemCount}
          hasNextPage={props.hasNextPage}
          isNextPageLoading={props.isNextPageLoading}
          loadNextPage={props.loadNextPage}
          loadMoreItems={loadMoreItems}
          isItemLoaded={isItemLoaded}
        />
      </div>
    </Box>
  );
};

export default Transactions;
