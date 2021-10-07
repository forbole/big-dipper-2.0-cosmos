import React from 'react';
import classnames from 'classnames';
import {
  Typography,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';

const SingleTransaction:React.FC<{
  className?: string;
  block: React.ReactNode;
  hash: React.ReactNode;
  time: string;
  messageCount: string;
  messages: any[];
  result?: React.ReactNode;
}> = ({
  className, block, hash, time, messages, result, messageCount,
}) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.timeContainer}>
        <Typography variant="body1" className="value">
          {hash}
        </Typography>
      </div>
      <div className={classes.itemContainer}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('block')}
          </Typography>
          {block}
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('time')}
          </Typography>
          <Typography variant="body1" className="value">
            {time}
          </Typography>
        </div>
        <div className={classes.flex}>
          {!!messageCount && (
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('messages')}
            </Typography>
            <Typography variant="body1" className="value">
              {messageCount}
            </Typography>
          </div>
          )}
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('result')}
            </Typography>
            {result}
          </div>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('details')}
          </Typography>
          {messages.map((x) => (
            <div className={classes.msgContainer}>
              <div className={classes.tags}>
                {x.type}
              </div>
              {x.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleTransaction;
