import { useStyles } from '@/components/single_transaction_mobile/styles';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, ReactNode } from 'react';

type SingleTransactionMobileProps = {
  className?: string;
  block: ReactNode;
  hash: ReactNode;
  time: string;
};

const SingleTransactionMobile: FC<SingleTransactionMobileProps> = ({
  className,
  block,
  hash,
  time,
}) => {
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
