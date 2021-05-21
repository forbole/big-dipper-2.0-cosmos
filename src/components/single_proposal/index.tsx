import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const SingleProposal: React.FC<{
  className?: string;
  id: string;
  title: string | React.ReactNode;
  status: string | React.ReactNode;
  description?: string;
}> = ({
  className,
  id,
  title,
  status,
  description,
}) => {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.header}>
        <Typography variant="h4" className={classes.id}>
          {id}
        </Typography>
        <span className={classes.mobile}>
          {status}
        </span>
      </div>
      {/* ================= */}
      {/* ================= */}
      <div>
        <div className={classes.title}>
          {React.isValidElement(title) ? title : (
            <Typography variant="h3" className="value">
              {title}
            </Typography>
          )}
        </div>
        {!!description && (
        <Typography variant="body2" className={classnames(classes.content)}>
          {description}
        </Typography>
        )}
      </div>
      {/* ================= */}
      {/* ================= */}
      <span className={classes.desktop}>
        {status}
      </span>
    </div>
  );
};

export default SingleProposal;
