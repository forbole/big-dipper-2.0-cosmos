import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const StackBar: React.FC<{
  className?: string;
  percentage: number;
}> = ({
  className, percentage,
}) => {
  const classes = useStyles(percentage);

  return (
    <div className={classnames(className, classes.root)}>
      <Typography variant="body1">
        {percentage}
        %
      </Typography>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
    </div>
  );
};

export default StackBar;
