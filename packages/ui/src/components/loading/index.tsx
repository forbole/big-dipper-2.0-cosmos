import { useStyles } from '@/components/loading/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import classnames from 'classnames';
import React, { FC } from 'react';

const Loading: FC<ComponentDefault> = ({ className }) => {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
