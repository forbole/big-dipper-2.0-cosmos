import React from 'react';
import classnames from 'classnames';
import {
  Desktop,
  Mobile,
} from './components';
import { useStyles } from './styles';
import { UseContext } from './types';

const TransactionsList: React.FC<{
  className?: string;
  useContext: UseContext;
}> = ({
  className,
  useContext,
}) => {
  const classes = useStyles();
  return (
    <div className={classnames(className)}>
      <Mobile className={classes.mobile} useContext={useContext} />
      <Desktop className={classes.desktop} useContext={useContext} />
    </div>
  );
};

export default TransactionsList;
