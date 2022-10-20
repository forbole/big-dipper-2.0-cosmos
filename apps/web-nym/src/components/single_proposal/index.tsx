import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { Tag } from '@components';
import { useStyles } from './styles';
import { getStatusInfo } from './utils';

const SingleProposal: React.FC<{
  className?: string;
  id: string;
  title: string | React.ReactNode;
  status: string;
  description?: string;
}> = ({
  className,
  id,
  title,
  status,
  description,
}) => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const statusInfo = getStatusInfo(status, t);

  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.header}>
        <Typography variant="h4" className={classes.id}>
          {id}
        </Typography>
        <span className={classes.mobile}>
          <Tag
            theme={statusInfo.tag}
            value={statusInfo.value}
          />
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
        <Tag
          theme={statusInfo.tag}
          value={statusInfo.value}
        />
      </span>
    </div>
  );
};

export default SingleProposal;
