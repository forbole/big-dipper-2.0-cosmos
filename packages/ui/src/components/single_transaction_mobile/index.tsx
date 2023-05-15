import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, ReactNode } from 'react';
import useStyles from '@/components/single_transaction_mobile/styles';

type SingleTransactionMobileProps = {
  className?: string;
  block: ReactNode;
  hash: ReactNode;
  time: ReactNode;
  messages: ReactNode;
  result?: ReactNode;
};

const SingleTransactionMobile: FC<SingleTransactionMobileProps> = ({
  className,
  block,
  hash,
  time,
  messages,
  result,
}) => {
  const { t } = useAppTranslation('transactions');
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('block')}
        </Typography>
        {block}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('hash')}
        </Typography>
        <Typography variant="body1" className="value">
          {hash}
        </Typography>
      </div>
      <div className={classes.flex}>
        {!!messages && (
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('messages')}
            </Typography>
            <Typography variant="body1" className="value">
              {messages}
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
          {t('time')}
        </Typography>
        <Typography variant="body1" className="value">
          {time}
        </Typography>
      </div>
    </div>
  );
};

export default SingleTransactionMobile;
