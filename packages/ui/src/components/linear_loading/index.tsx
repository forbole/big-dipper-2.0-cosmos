import { useStyles } from '@/components/linear_loading/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import classnames from 'classnames';
import React, { FC } from 'react';

const LinearLoading: FC<ComponentDefault> = ({ className }) => {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      <LinearProgress />
    </div>
  );
};

export default LinearLoading;
