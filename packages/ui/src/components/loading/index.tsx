import useStyles from '@/components/loading/styles';
import CircularProgress from '@mui/material/CircularProgress';
import React, { FC } from 'react';

const Loading: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.root, className)}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
