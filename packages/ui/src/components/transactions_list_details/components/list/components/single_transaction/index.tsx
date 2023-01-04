import { useStyles } from '@/components/transactions_list_details/components/list/components/single_transaction/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, ReactNode } from 'react';

export type SingleTransactionProps = {
  className?: string;
  block: ReactNode;
  hash: ReactNode;
  type: ReactNode;
  time: string;
  messageCount: string;
  messages: Array<
    {
      type: ReactNode;
      message: ReactNode;
    } & JSX.IntrinsicAttributes
  >;
  result?: ReactNode;
};

const SingleTransaction: FC<SingleTransactionProps> = ({
  className,
  block,
  hash,
  type,
  time,
  messages,
  result,
  messageCount,
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
          <div className={classnames(classes.item, 'block')}>
            <Typography variant="h4" className="label">
              {t('type')}
            </Typography>
            {type}
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
              // eslint-disable-next-line react/no-array-index-key
              <div key={`${x.key}-${i}`} className={classes.msg}>
                <div className={classes.tags}>{x.type}</div>
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
