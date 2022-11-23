import React from 'react';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from '@/components/single_transaction_mobile/styles';

const SingleTransactionMobile: React.FC<{
  className?: string;
  block: React.ReactNode;
  hash: React.ReactNode;
  time: string;
}> = ({ className, block, hash, time }) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
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
