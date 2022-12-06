import { useStyles } from '@/components/loading/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import classnames from 'classnames';
import React from 'react';

const Loading: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
