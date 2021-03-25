import React from 'react';
import classnames from 'classnames';
import {
  Desktop,
  Mobile,
} from './components';
import { useStyles } from './styles';
import { TransactionsListState } from './types';

const TransactionsList: React.FC<TransactionsListState> = (props) => {
  const {
    className,
    hasNextPage = false,
    isNextPageLoading = false,
    items,
    loadNextPage = () => null,
    loadMoreItems = () => null,
    isItemLoaded = () => true,
    itemCount,
  } = props;
  const classes = useStyles();
  const formatProps = {
    hasNextPage,
    isNextPageLoading,
    isItemLoaded,
    loadNextPage,
    loadMoreItems,
    items,
    itemCount,
  };
  return (
    <div className={classnames(className)}>
      <Mobile className={classes.mobile} {...formatProps} />
      <Desktop className={classes.desktop} {...formatProps} />
    </div>
  );
};

export default TransactionsList;
