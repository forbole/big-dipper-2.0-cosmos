import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const SingleProposal: React.FC<{
  className?: string;
  id: string;
  proposer: React.ReactNode;
  title: React.ReactNode;
  status: React.ReactNode;
  submissionTime: string;
  votingTimeStart: string;
  content: string;
}> = ({
  className,
  id,
  proposer,
  title,
  status,
  submissionTime,
  votingTimeStart,
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
          {title}
        </div>
        <Typography variant="body1" className={classnames(classes.desktop, classes.content)}>
          {content}
        </Typography>
        <div className={classes.infoWrapper}>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('proposer')}
            </Typography>
            {proposer}
          </div>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('submissionTime')}
            </Typography>
            <Typography variant="body1" className="value">
              {submissionTime}
            </Typography>
          </div>

          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('votingTimeStart')}
            </Typography>
            <Typography variant="body1" className="value">
              {votingTimeStart}
            </Typography>
          </div>
        </div>
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
