import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const SkipRate: React.FC<{
  className?: string;
  percentage: number;
  content: string;
}> = ({
  className, percentage, content,
}) => {
  const classes = useStyles(percentage);
  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.content}>
        <Typography variant="body1">
          {content}
        </Typography>
        <Typography variant="body1" className="percentage">
          {percentage}
          %
        </Typography>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
    </div>
  );
};

export default SkipRate;
