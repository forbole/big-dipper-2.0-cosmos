import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const SingleProposal: React.FC<{
  className?: string;
  id: string;
  title: React.ReactNode;
  status: React.ReactNode;
  content?: string;
}> = ({
  className,
  id,
  title,
  status,
  content,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('proposals');
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
        {!!content && (
        <Typography variant="body1" className={classnames(classes.desktop, classes.content)}>
          {content}
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
