import React from 'react';
import classnames from 'classnames';
import {
  Typography,
  Divider,
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
        <div className={classes.itemPrimaryDetailsContainer}>
          <div className={classnames(classes.item, 'block')}>
            <Typography variant="h4" className="label">
              {t('block')}
            </Typography>
            {block}
          </div>
          <div className={classnames(classes.item, 'time')}>
            <Typography variant="h4" className="label">
              {t('time')}
            </Typography>
            <Typography variant="body1" className="value">
              {time}
            </Typography>
          </div>
          <div className={classnames(classes.item, 'messages')}>
            <Typography variant="h4" className="label">
              {t('messages')}
            </Typography>
            <Typography variant="body1" className="value">
              {messageCount}
            </Typography>
          </div>
          <div className={classnames(classes.item, 'result')}>
            <Typography variant="h4" className="label">
              {t('result')}
            </Typography>
            {result}
          </div>
        </div>
        <Divider />
        <div className={classes.item}>
          <div className={classes.msgListContainer}>
            {messages.map((x, i) => (
              <div className={classes.msg} key={`${x.type}-${i}`}>
                <div className={classes.tags}>
                  {x.type}
                </div>
                {x.message}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTransaction;
