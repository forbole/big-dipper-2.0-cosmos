import useStyles from '@/components/linear_loading/styles';
import LinearProgress from '@mui/material/LinearProgress';
import React, { FC } from 'react';

const LinearLoading: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(className, classes.root)}>
      <LinearProgress />
    </div>
  );
};

export default LinearLoading;
