import React from 'react';
import classnames from 'classnames';
import { CircularProgress } from '@material-ui/core';
import { useStyles } from './styles';

const Loading: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
